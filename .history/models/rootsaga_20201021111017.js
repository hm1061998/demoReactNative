import { all, call } from 'redux-saga/effects'
import CartSaga from './shoppingCart/saga'
import CategoriesSaga from './category/saga'
export default function* rootSaga() {
    yield all([
        call(CartSaga),
        call(CategoriesSaga),
    ])
}