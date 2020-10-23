import reducer from './reducer'
import { call, put, takeLatest } from 'redux-saga'

function* ADD_TO_CART({ payload }) {
    try {
        yield put("ADD_TO_CART", payload)
    } catch { (err => console.log(err)) }
}

export function* watchGetDataWeather() {
    yield takeLatest("ADD_TO_CART", ADD_TO_CART)
}