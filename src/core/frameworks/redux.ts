import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../adapters/redux/reducers";
import rootSaga from "../adapters/redux/sagas";

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        combineReducers(reducers),
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}