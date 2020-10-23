import { all, call, put, takeLatest, takeAll } from 'redux-saga/effects'

const saga = {
    namespace: "shoppingcart",
    effects: {
        * ADD_TO_CART({ payload }) {
            try {
                console.log("here")
                yield put("ADD_TO_CART", payload)
            } catch { (err => console.log(err)) }
        },
        * INCREMENT({ payload }) {
            try {
                yield put("ADD_TO_CART", payload)
            } catch { (err => console.log(err)) }
        }

    }
}
function* watchAddCart() {
    const { namespace, effects } = saga
    const data = Object.keys(effects)
    yield all([
        data.map(item => takeLatest(`${namespace}/${item}`, { item }))

    ])
}

export default function* rootSaga() {
    yield all([
        call(watchAddCart)
    ])
}