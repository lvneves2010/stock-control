export default {
    state: {
        funds: 10000,
        portfolioValue: 0,
        stocks: []
    },
    mutations: {
        buyStock( state, { stockId, quantity, stockPrice } ) {
            const record = state.stocks.find( element => element.id == stockId )
            record ? record.quantity += quantity
            : state.stocks.push({
                id: stockId,
                quantity: quantity
            })
            state.funds -= stockPrice * quantity
            state.portfolioValue += stockPrice * quantity
        },
        sellStock( state, {stockId, quantity, stockPrice} ) {
            const record = state.stocks.find( element => element.id == stockId )
            record.quantity > quantity ?
            record.quantity -= quantity :
            state.stocks.splice( state.stocks.indexOf(record), 1 )
            state.funds += stockPrice * quantity  
            state.portfolioValue -= stockPrice * quantity          
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
            const array = portfolio.stockPortfolio.map(p => (p.price * p.quantity))
            state.portfolioValue = array.reduce((a, n) => {
                return a += n;
                }, 0)
        }
    },
    actions: {
        sellStock({  commit }, order) {
            commit( 'sellStock', order )
        }
    },
    getters: {
        stockPortfolio( state, getters ) {
            return state.stocks.map( stock => {
                const record = getters.stocks.find( element => element.id == stock.id )
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            } )
        },
        funds(state) {
            return state.funds
        },
        portfolioValue(state) {
            return state.portfolioValue
        }
    }
}