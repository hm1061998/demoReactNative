import { all, call, put, takeLatest } from 'redux-saga/effects'

function* ADD_TO_CART({ payload }) {
    try {
        yield put("ADD_TO_CART", payload)
    } catch { (err => console.log(err)) }
}

export function* watchAddCart() {
    yield takeLatest("ADD_TO_CART", ADD_TO_CART)
}
export default function* rootSaga() {
    yield all([
        call(watchAddCart)
    ])
}