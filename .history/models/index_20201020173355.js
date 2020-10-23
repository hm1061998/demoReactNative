import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)
//run saga
sagaMiddleware.run(rootSaga)
export default store
