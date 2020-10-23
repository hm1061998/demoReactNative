import { combineReducers } from 'redux'
import cartStore from './shoppingCart/reducer'
import CategoriesStore from './category/reducer'
const rootReducer = combineReducers({
    cartStore,
    CategoriesStore
})


export default rootReducer