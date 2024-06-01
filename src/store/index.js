import {legacy_createStore as createStore} from 'redux'
import BasketPage from '../pages/BasketPage'
const rootReducer =({
    products:BasketPage
})

export const store = createStore(rootReducer)