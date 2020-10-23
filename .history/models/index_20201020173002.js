import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const configStore = (preLoadState = {}) => {
    const store = createStore(
        reducer,
        preLoadState,

        applyMiddleware(sagaMiddleware)

    )
    //run saga
    sagaMiddleware.run(rootSaga)

    return store
}
export default configStore
