(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.Datafeeds = {})));
}(this, (function (exports) { 'use strict';

var api_root = 'https://min-api.cryptocompare.com';
var history = {};

var historyProvider = {
	history: history,

    getBars: function(symbolInfo, resolution, from, to, first, limit) {
		var split_symbol = symbolInfo.name.split(/[:/]/);
			var url = resolution === 'D' ? 'data/histoday' : resolution >= 60 ? 'data/histohour' : 'data/histominute';
			
			var qs = {
					e: split_symbol[0],
					fsym: split_symbol[1],
					tsym: split_symbol[2],
					toTs:  to ? to : '',
					limit: limit ? limit : 2000, 
					api_key: '7a877fb52ac46a2ec6a78b939733a9383eaff6a811fdbf456f2cc2ab9dec17fb'
					// aggregate: 1//resolution 
				};
			// console.log({qs})
			return new Promise(function (resolve, reject) {
				sendRequest(api_root, url, qs)
					.then(function (data) {
						if (data.Response && data.Response === 'Error') {
							console.log('CryptoCompare API error:',data.Message);
							return []
						}
						if (data.Data.length) {
							console.log(("Actually returned: " + (new Date(data.TimeFrom * 1000).toISOString()) + " - " + (new Date(data.TimeTo * 1000).toISOString())));
							var bars = data.Data.map(function (el) {
								return {
									time: el.time * 1000, //TradingView requires bar time in ms
									low: el.low,
									high: el.high,
									open: el.open,
									close: el.close,
									volume: el.volumefrom 
								}
							});
								if (first) {
									var lastBar = bars[bars.length - 1];
									history[symbolInfo.name] = {lastBar: lastBar};
								}
							resolve({
								bars: bars
							});
						} else {
							resolve({
								bars: []
							});
						}
					
				})
					.catch(function (reason) {
					var reasonString = getErrorMessage(reason);
					console.warn("HistoryProvider: getBars() failed, error=" + reasonString);
					reject(reasonString);
				});
			});
     
}
};

function sendRequest(datafeedUrl, urlPath, params) {
	if (params !== undefined) {
		var paramKeys = Object.keys(params);
		if (paramKeys.length !== 0) {
			urlPath += '?';
		}
		urlPath += paramKeys.map(function (key) {
			return encodeURIComponent(key) + "=" + encodeURIComponent(params[key].toString());
		}).join('&');
	}
	console.log('New request: ' + urlPath);
	// Send user cookies if the URL is on the same origin as the calling script.
	var options = { credentials: 'same-origin' };
	
	return fetch(datafeedUrl + "/" + urlPath, options)
		.then(function (response) { return response.text(); })
		.then(function (responseTest) { return JSON.parse(responseTest); });
}

// api/stream.js
// we use Socket.io client to connect to cryptocompare's socket.io stream

var socket_url = 'wss://streamer.cryptocompare.com';
var socket = io(socket_url);
// keep track of subscriptions
var _subs = [];

var stream = {
 subscribeBars: function(symbolInfo, resolution, updateCb, uid, resetCache) {
  var channelString = createChannelString(symbolInfo);
  socket.emit('SubAdd', {subs: [channelString]});
  
  var newSub = {
   channelString: channelString,
   uid: uid,
   resolution: resolution,
   symbolInfo: symbolInfo,
   lastBar: historyProvider.history[symbolInfo.name].lastBar,
   listener: updateCb,
  };
_subs.push(newSub);
 },
 unsubscribeBars: function(uid) {
  var subIndex = _subs.findIndex(function (e) { return e.uid === uid; });
  if (subIndex === -1) {
   //console.log("No subscription found for ",uid)
   return
  }
  var sub = _subs[subIndex];
  socket.emit('SubRemove', {subs: [sub.channelString]});
  _subs.splice(subIndex, 1);
 }
};

socket.on('connect', function () {
 console.log('===Socket connected');
});
socket.on('disconnect', function (e) {
 console.log('===Socket disconnected:', e);
});
socket.on('error', function (err) {
 console.log('====socket error', err);
});
socket.on('m', function (e) {
 // here we get all events the CryptoCompare connection has subscribed to
 // we need to send this new data to our subscribed charts
 var _data= e.split('~');
 if (_data[0] === "3") {
  // console.log('Websocket Snapshot load event complete')
  return
 }
 var data = {
  sub_type: parseInt(_data[0],10),
  exchange: _data[1],
  to_sym: _data[2],
  from_sym: _data[3],
  trade_id: _data[5],
  ts: parseInt(_data[6],10),
  volume: parseFloat(_data[7]),
  price: parseFloat(_data[8])
 };
 
 var channelString = (data.sub_type) + "~" + (data.exchange) + "~" + (data.to_sym) + "~" + (data.from_sym);
 
 var sub = _subs.find(function (e) { return e.channelString === channelString; });
 
 if (sub) {
  // disregard the initial catchup snapshot of trades for already closed candles
  if (data.ts < sub.lastBar.time / 1000) {
    return
   }
  
var _lastBar = updateBar(data, sub);

// send the most recent bar back to TV's realtimeUpdate callback
  sub.listener(_lastBar);
  // update our own record of lastBar
  sub.lastBar = _lastBar;
 }
});

// Take a single trade, and subscription record, return updated bar
function updateBar(data, sub) {
 var lastBar = sub.lastBar;
 var resolution = sub.resolution;
 if (resolution.includes('D')) {
  // 1 day in minutes === 1440
  resolution = 1440;
 } else if (resolution.includes('W')) {
  // 1 week in minutes === 10080
  resolution = 10080;
 }
var coeff = resolution * 60;
 // console.log({coeff})
 var rounded = Math.floor(data.ts / coeff) * coeff;
 var lastBarSec = lastBar.time / 1000;
 var _lastBar;
 
if (rounded > lastBarSec) {
  // create a new candle, use last close as open **PERSONAL CHOICE**
  _lastBar = {
   time: rounded * 1000,
   open: lastBar.close,
   high: lastBar.close,
   low: lastBar.close,
   close: data.price,
   volume: data.volume
  };
  
 } else {
  // update lastBar candle!
  if (data.price < lastBar.low) {
   lastBar.low = data.price;
  } else if (data.price > lastBar.high) {
   lastBar.high = data.price;
  }
  
  lastBar.volume += data.volume;
  lastBar.close = data.price;
  _lastBar = lastBar;
 }
 return _lastBar
}

// takes symbolInfo object as input and creates the subscription string to send to CryptoCompare
function createChannelString(symbolInfo) {
  var channel = symbolInfo.name.split(/[:/]/);
  var exchange = channel[0] === 'GDAX' ? 'Coinbase' : channel[0];
  var to = channel[2];
  var from = channel[1];
 // subscribe to the CryptoCompare trade channel for the pair and exchange
  return ("0~" + exchange + "~" + from + "~" + to)
}

// Datafeed implementation, will be added later

var supportedResolutions = ["1", "5", "15", "30", "60", "300", "D", "5D", "2W", "M", "3M", "6M"];

var config = {
    supported_resolutions: supportedResolutions
}; 

var UDFCompatibleDatafeed = /** @class */ (function () {
    function UDFCompatibleDatafeed() {
       
        
       
    }
    UDFCompatibleDatafeed.prototype.onReady = function (callback) {
        setTimeout(function () { return callback(config); }, 0);
    };
 
    UDFCompatibleDatafeed.prototype.calculateHistoryDepth = function (resolution, resolutionBack, intervalBack) {
         return resolution < 60 ? {resolutionBack: 'D', intervalBack: '1'} : undefined
    };
    UDFCompatibleDatafeed.prototype.getMarks = function (symbolInfo, from, to, onDataCallback, resolution) {
        console.log('=====getMarks running');
    };
    UDFCompatibleDatafeed.prototype.getTimescaleMarks = function (symbolInfo, from, to, onDataCallback, resolution) {
        console.log('=====getTimeScaleMarks running');
    };
    UDFCompatibleDatafeed.prototype.getServerTime = function (callback) {
        console.log('=====getServerTime running');
    };
    UDFCompatibleDatafeed.prototype.searchSymbols = function (userInput, exchange, symbolType, onResultReadyCallback) {
         console.log('====Search Symbols running');
    };
    UDFCompatibleDatafeed.prototype.resolveSymbol = function (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
        // expects a symbolInfo object in response
        console.log('======resolveSymbol running');
        console.log('resolveSymbol:',{symbolName: symbolName});
        var split_data = symbolName.split(/[:/]/);
        console.log({split_data: split_data});
        var symbol_stub = {
            name: symbolName,
            description: '',
            type: 'crypto',
            session: '24x7',
            timezone: 'Etc/UTC',
            ticker: symbolName,
            exchange: split_data[0],
            minmov: 1,
            pricescale: 100000000,
            has_intraday: true,
            intraday_multipliers: ['1', '60'],
            supported_resolution:  supportedResolutions,
            volume_precision: 8,
            data_status: 'streaming',
        };

        if (split_data[2].match(/USD|EUR|JPY|AUD|GBP|KRW|CNY/)) {
            symbol_stub.pricescale = 100;
        }
        setTimeout(function() {
            onSymbolResolvedCallback(symbol_stub);
            console.log('Resolving that symbol....', symbol_stub);
        }, 0);
        
        
        // onResolveErrorCallback('Not feeling it today')
    };
    UDFCompatibleDatafeed.prototype.getBars = function (symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
        console.log('=====getBars running');
        // console.log('function args',arguments)
        // console.log(`Requesting bars between ${new Date(from * 1000).toISOString()} and ${new Date(to * 1000).toISOString()}`)
        historyProvider.getBars(symbolInfo, resolution, from, to, firstDataRequest)
        .then(function (bars) {
            if (bars.length) {
                onHistoryCallback(bars.bars, {noData: false});
            } else {
                onHistoryCallback(bars.bars, {noData: true});
            }
        }).catch(function (err) {
            console.log({err: err});
            onErrorCallback(err);
        });
    };
    UDFCompatibleDatafeed.prototype.subscribeBars = function (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) {
         console.log('=====subscribeBars runnning');
        stream.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback);
    };
    UDFCompatibleDatafeed.prototype.unsubscribeBars = function (subscriberUID) {
        stream.unsubscribeBars(subscriberUID);
    };
 
    return UDFCompatibleDatafeed;
}());

exports.UDFCompatibleDatafeed = UDFCompatibleDatafeed;

Object.defineProperty(exports, '__esModule', { value: true });

})));
