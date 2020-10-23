import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)
//run saga
sagaMiddleware.run(rootSaga)
export default store
