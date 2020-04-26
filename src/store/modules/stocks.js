// import stocks from '../../data/stocks'
import Vue from 'vue'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        ramdomizeStocks(state) {
            state.stocks.forEach( stock => {
                stock.price = Math.round(stock.price * ( 1 + Math.random() - 0.45 ))
            } )
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit( 'buyStock', order )
        },
        initStocks({ commit }) {
            Vue.prototype.$ibmstock.get().then(res => {
              const atual = []
              res.data.quoteResponse.result.map((company, i) => atual.push({id: i + 1, name: company.symbol, price: company.regularMarketPrice}))
               commit( 'setStocks', atual )
            })
        },
        ramdomizeStocks({ commit }) {
            commit( 'ramdomizeStocks' )
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}