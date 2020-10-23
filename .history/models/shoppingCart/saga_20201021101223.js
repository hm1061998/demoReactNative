import { all, call, put, takeLatest, takeAll } from 'redux-saga/effects'
import { ADD_TO_CART } from './actions'
const saga = {
    namespace: "shoppingcart",
    effects: {
        * addCartItem({ payload }) {
            try {
                console.log("here")
                yield put(ADD_TO_CART, payload)
            } catch { (err => console.log(err)) }
        },
        * INCREMENT({ payload }) {
            try {
                yield put("ADD_TO_CART", payload)
            } catch { (err => console.log(err)) }
        }

    }
}
function* addCartItem({ payload }) {
    try {
        console.log("here")
        yield put(ADD_TO_CART(payload))
    } catch { (err => console.log(err)) }
}
function* watchAddCart() {
    const { namespace, effects } = saga
    const data = Object.keys(effects)
    yield all([
        yield takeLatest("addCartItem", addCartItem)

    ])

}

export default function* rootSaga() {
    yield all([
        call(watchAddCart)
    ])
}