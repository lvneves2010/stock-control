import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://stock-trader-5113b.firebaseio.com/'
        }),
        Vue.prototype.$ibmstock = axios.create({
            baseURL: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=IBM'
        })
    }
})