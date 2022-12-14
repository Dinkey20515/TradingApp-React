// api/stream.js
import historyProvider from './historyProvider.js'
import { createStore, useStore } from "usestore-react";
const ask = createStore("askprice", 0);
const bid = createStore("bidprice", 0);


var clientID = 123; 
const url = "ws://localhost:8000/ws/" + clientID;
const ws = new WebSocket(url);
ws.onopen = function(evt) {
  console.log('===Socket connected:', evt)
};

ws.onclose = function(evt) {
  console.log('===Socket disconnected:', evt)
};

ws.onerror = function(evt) {
  console.log('===Socket error:', evt)
};
// keep track of subscriptions
var _subs = []

export default {
 subscribeBars: function(symbolInfo, resolution, updateCb, uid, resetCache) {
  const channelString = createChannelString(symbolInfo)
  // socket.emit('SubAdd', {subs: [channelString]})
  
  ws.send(JSON.stringify({method: 'SubAdd' , subs: [channelString]}) );
  var newSub = {
   channelString,
   uid,
   resolution,
   symbolInfo,
   lastBar: historyProvider.history[symbolInfo.name].lastBar,
   listener: updateCb,
  }
  _subs.push(newSub)
 },
 unsubscribeBars: function(uid) {
  var subIndex = _subs.findIndex(e => e.uid === uid)
  if (subIndex === -1) {
   //console.log("No subscription found for ",uid)
   return
  }
  var sub = _subs[subIndex]
  // socket.emit('SubRemove', {subs: [sub.channelString]})
  _subs.splice(subIndex, 1)
 }
}


ws.onmessage = event => {
  const e = JSON.parse(event.data);

  if(e['obj'] == undefined){
    return;
  }
  const _data= e['obj'];
  if (e['obj'].length === 0) {
    // console.log('Websocket Snapshot load event complete')
    return
  }
  const data = {
    sub_type: '0',
    symbol: e['symbol'],
    trade_id: 1,
    ts: parseInt(_data[0],10),
    volume: parseFloat(_data[4]),
    price: parseFloat(_data[2])
  }

  ask.setState(parseFloat(_data[1]));
  bid.setState(parseFloat(_data[2]));

  const channelString = `${data.sub_type}~${data.symbol}`
  
  const sub = _subs.find(eve => eve.channelString === channelString)
  
  if (sub) {
    // disregard the initial catchup snapshot of trades for already closed candles
    if (data.ts < sub.lastBar.time / 1000) {
      return
    }
    
  var _lastBar = updateBar(data, sub)

  // send the most recent bar back to TV's realtimeUpdate callback
    sub.listener(_lastBar)
    // update our own record of lastBar
    sub.lastBar = _lastBar
  }
};


// Take a single trade, and subscription record, return updated bar
function updateBar(data, sub) {
 var lastBar = sub.lastBar
 let resolution = sub.resolution
 if (resolution.includes('D')) {
  // 1 day in minutes === 1440
  resolution = 1440
 } else if (resolution.includes('W')) {
  // 1 week in minutes === 10080
  resolution = 10080
 }
var coeff = resolution * 60
 // console.log({coeff})
 var rounded = Math.floor(data.ts / coeff) * coeff
 var lastBarSec = lastBar.time / 1000
 var _lastBar
 
if (rounded > lastBarSec) {
  // create a new candle, use last close as open **PERSONAL CHOICE**
  _lastBar = {
   time: rounded * 1000,
   open: lastBar.close,
   high: lastBar.close,
   low: lastBar.close,
   close: data.price,
   volume: data.volume
  }
  
 } else {
  // update lastBar candle!
  if (data.price < lastBar.low) {
   lastBar.low = data.price
  } else if (data.price > lastBar.high) {
   lastBar.high = data.price
  }
  
  lastBar.volume += data.volume
  lastBar.close = data.price
  _lastBar = lastBar
 }
 return _lastBar
}

// takes symbolInfo object as input and creates the subscription string to send to mt5
function createChannelString(symbolInfo) {
  return `0~${symbolInfo.name}`
}
