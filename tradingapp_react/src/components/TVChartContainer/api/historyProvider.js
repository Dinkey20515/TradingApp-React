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
		limit = limit?limit:2000;
		const url = `/history/${symbolInfo.name}`;
		if(resolution === 'D') {
			from = to - (86400 * limit)
		}else if(resolution >= 60) {
			from = to - (3600 * limit)
		}else {
			from = to - (60 * limit)
		}
		if(to<0) {

			return []
		}
		if(to > 0 && from < 0)
			from = 0;

        return rp({
                uri: `${api_root}${url}/${from}/${to}`,
                headers: {
					"Content-Type": 'application/json',
					"timeframe": resolution,
					"x_start_date": convertDate(from * 1000),
					"x_end_date": convertDate(to * 1000),
					"limit": limit,
					"Accept": '/',
				},
				body: JSON.stringify({
					"x_start_date": from,
					"x_end_date": to,
				})
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
