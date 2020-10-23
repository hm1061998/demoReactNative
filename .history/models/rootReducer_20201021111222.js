import { combineReducers } from 'redux'
import cartStore from './shoppingCart/reducer'
import categoriesStore from './category/reducer'
const rootReducer = combineReducers({
    cartStore,
    categoriesStore
})


export default rootReducer