import { all, call } from 'redux-saga/effects'
import { watchAddCart } from './shoppingCart/saga'

export default function* rootSaga() {
    yield all([
        call(watchAddCart)
    ])
}