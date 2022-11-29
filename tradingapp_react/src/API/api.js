let rp = require('request-promise').defaults({json: true});
import axios from 'axios';

const api_root = 'http://localhost:5000/';
const api_root2 = 'http://localhost:8000/';

// node api


// python api
export const GET_SYMBOLS_PRICE = api_root2 + "group_history"; 


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
    const url = 'api/mt5/sendRequest'
    return rp({
        uri: `${api_root}${url}`,
        body: JSON.stringify(data)
    })
}


export const getData = (uri, urlparams='', headers)=> {
    return axios.get(`${api_root}${uri}${urlparams}`, headers)
}

export const postData = (uri, body)=> {
    return axios.post(`${api_root}${uri}}`, body)
}

