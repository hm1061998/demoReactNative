import { combineReducers } from 'redux'
import cartStore from './shoppingCart/reducer'
import categoriesStore from './category/reducer'
import productsStore from './product/reducer'
const rootReducer = combineReducers({
    cartStore,
    categoriesStore,
    productsStore
})


export default rootReducer