let rp = require('request-promise').defaults({json: true})

const api_root = 'http://localhost:5000/';

export const login = (uid, pass)=> {
    const url = 'api/mt5/login'
    const qs = {
        uid : uid,
        pass : pass
    }

    return rp({
        url: `${api_root}${url}`,
        qs,
    })
}

export const newslist = (total)=> {
    const url = 'api/mt5/newslist'
    const qs = {
        total : total,
    }
    return rp({
        url: `${api_root}${url}`,
        qs,
    })
}
export const news = (index)=> {
    const url = 'api/mt5/news'
    const qs = {
        id : index,
    }
    return rp({
        url: `${api_root}${url}`,
        qs,
    })
}

export const singup = (uid, pass) => {
    const url = 'api/mt5/singup'
    const qs = {
        uid : uid,
        pass : pass
    }

    return rp({
        url: `${api_root}${url}`,
        qs,
    })
    .then(data => {
        console.log({data})
        if (data.state && data.state === 0) {
            console.log('mt5 API error:',data.data)
            return [];
        }
        if (data.data) {
           
            return data.data;
        } else {
            return [];
        }
    })
}

// sell / buy order action
export const sendOrderRequest = (data) => {
    console.log('sendOrderRequest')
    console.log(data)
    const url = 'api/mt5/sendRequest'
    return rp({
        uri: `${api_root}${url}`,
        body: JSON.stringify(data)
    })
}

