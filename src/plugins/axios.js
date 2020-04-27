import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-5113b.firebaseio.com/'
        }),
        Vue.prototype.$yahooApi = axios.create({
            baseURL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=IBM,AAPL,MSFT,GOOG',
            headers: { 'x-rapidapi-key' : '65168846edmsh21b2d55574ca09ep1e2596jsnc7a92555669d' }
        })
    }
})