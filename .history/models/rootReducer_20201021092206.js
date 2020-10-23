import { combineReducers } from 'redux'
import cartStore from './shoppingCart/reducer'
const rootReducer = combineReducers({
    cartStore
})


export default rootReducer