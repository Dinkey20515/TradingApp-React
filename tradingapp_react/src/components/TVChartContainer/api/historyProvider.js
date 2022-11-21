var rp = require('request-promise').defaults({json: true})

const api_root = 'http://localhost:8000'
const history = {}

function convertDate(milisecond) {
	const d = new Date(milisecond).toISOString();
	var ymd = d.split('T');
	var hms = ymd[1].split('.')
	return ymd[0]+' '+hms[0];
}

export default {
	history: history,

    getBars: function(symbolInfo, resolution, from, to, first, limit) {
		var split_symbol = symbolInfo.name.split(/[:/]/)
		limit = limit?limit:2000;
		const url = `/history/${split_symbol[1]+split_symbol[2]}`;//${split_symbol[1]+split_symbol[2]}/${resolution}/${from }/${to}`; //resolution === 'D' ? '/data/histoday' : resolution >= 60 ? '/data/histohour' : '/data/histominute'
		if (resolution.endsWith("m")) {
			from = to - (60 * limit)
		}else if(resolution.endsWith("M")) {
			from = to - (86400 * 30 * limit)
		}else if(resolution.endsWith("D")) {
			from = to - (86400 * limit)
		}else if(resolution.endsWith("W")) {
			from = to - (86400 * 7 * limit)
		}else {
			from = to - (60 * limit)
		}
		if (from<0 || to<946652400) {
			from = 0;
			return;
		}
		const qs = {
				//e: split_symbol[0],
				//timeframe: resolution,
				symbol: (split_symbol[1]+split_symbol[2]),
				//tsym: split_symbol[2],
				//fromTs: from? convertDate(from * 1000): '2022-11-11 00:00:00',
				//toTs:  to ? convertDate(to * 1000) : '2022-11-11 05:00:00',
				//limit: limit ? limit : 2000, 
				//api_key: '7a877fb52ac46a2ec6a78b939733a9383eaff6a811fdbf456f2cc2ab9dec17fb',
				// aggregate: 1 //resolution 
			}
		// console.log({qs})

        return rp({
                uri: `${api_root}${url}`,
                headers: {
					"Content-Type": 'application/json',
					"timeframe": resolution,
					"x_start_date": from,//convertDate(from * 1000),
					"x_end_date": to,//convertDate(to * 1000),
					"limit": limit,
					"Accept": '/',
				}
            })
            .then(data => {
				console.log('symboldata--------------')
                console.log({data})
				if (data.Response && data.Response === 'Error') {
					console.log('CryptoCompare API error:',data.Message)
					return []
				}
				if (data.Data.length) {
					console.log(`Actually returned: ${convertDate(from * 1000)} - ${convertDate(to * 1000)}`)
					var bars = data.Data.map(el => {
						return {
							time: 	new Date(el.time).getTime(), //TradingView requires bar time in ms
							low: 	el.low,
							high: 	el.high,
							open: 	el.open,
							close: 	el.close,
							volume: el.real_volume 
						}
					})
						if (first) {
							var lastBar = bars[bars.length - 1]
							history[symbolInfo.name] = {lastBar: lastBar}
						}
					return bars
				} else {
					return []
				}
			})
	}
}
