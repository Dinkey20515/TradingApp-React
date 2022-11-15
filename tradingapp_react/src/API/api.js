let rp = require('request-promise').defaults({json: true})

const api_root = 'localhost:5000/';

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

export const news = (total)=> {
    const url = 'api/mt5/news'
    const qs = {
        total : total,
    }
    return rp({
        url: `${api_root}${url}`,
        qs,
    })
}

export const singup = (uid, pass)=> {
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

