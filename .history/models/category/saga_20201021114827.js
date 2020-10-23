import { all, call, put, takeEvery } from 'redux-saga/effects'
import { onloading, onsuccess, onerror } from './actions'
import { getDataCategoryFromApi } from '../../service/index'
function* getDataCategory() {
    try {
        // console.log("aaa")
        yield put(onloading())
        const response = yield call(getDataCategoryFromApi)
        if (response) {
            yield put(onsuccess(response))
        } else {
            yield put(onerror('lỗi lấy danh sách'))
        }
    }
    catch (err) { console.log(err) }
}

export default function* watchGetData() {
    yield takeEvery('GET_DATA_CATEGORY', getDataCategory)
}