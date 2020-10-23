import { all, call, put, takeLatest, takeAll } from 'redux-saga/effects'
import { ADD_TO_CART, DELETE_ITEM_FROM_CART } from './actions'

function* addCartItem({ payload }) {
    try {
        yield put(ADD_TO_CART(payload))
    } catch (err) { console.log(err) }
}

function* deleteCartItem({ payload: { id } }) {
    try {
        yield put(DELETE_ITEM_FROM_CART(id))
    } catch (err) { console.log(err) }
}
export default function* watchAddCart() {
    yield all([
        yield takeLatest("addCartItem", addCartItem),
        yield takeLatest("deleteItemCart", deleteItemCart)
    ])

}
