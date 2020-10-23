import { all, call, put, takeLatest, takeAll } from 'redux-saga/effects'
import { ADD_TO_CART } from './actions'

function* addCartItem({ payload }) {
    try {
        yield put(ADD_TO_CART(payload))
    } catch { (err => console.log(err)) }
}
export default function* watchAddCart() {
    yield all([
        yield takeLatest("addCartItem", addCartItem)

    ])

}
