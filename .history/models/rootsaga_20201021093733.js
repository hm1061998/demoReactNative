import { all, call } from 'redux-saga/effects'
import CartSaga from './shoppingCart/saga'

export default function* rootSaga() {
    yield all([
        call(CartSaga)
    ])
}