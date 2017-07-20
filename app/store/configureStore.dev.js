import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger'

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            logger, // 一个很便捷的 middleware，用来打印 action 日志
        )
    );

    return store;
}
