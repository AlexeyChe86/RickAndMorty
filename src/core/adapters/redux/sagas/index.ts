import { all } from "redux-saga/effects";
import CharacterSaga from './characterSaga';

export * from './characterSaga';

export default function* rootSaga() {
    yield all([CharacterSaga()]);
}