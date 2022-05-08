import { CharacterService } from "../../../services/apiService";
import { CharacterInteractor } from "../../../useCases";
import { LoadingActionType, updateGetAllCharacters, updateInitialDataLoading } from "../actions";
import {put, call, all, takeLatest} from 'redux-saga/effects';

const GET_INITIAL_DATA = 'GET_INITIAL_DATA';

export const getInitialDataAction = (): LoadingActionType => ({
    type: GET_INITIAL_DATA,
    loading: {
        initialData: true,
    },
});

function* getAllCharactersSaga(): any {
    try {
        const service = new CharacterService();
        const interator = new CharacterInteractor(service);

        const characters = yield interator.getAllCharacters();
        yield put(updateGetAllCharacters(characters))
    } catch (error) {
        console.log(error);
    }
}

function* getInitialDataSaga() {
    yield all([
        call(getAllCharactersSaga),
    ]);
    yield put(updateInitialDataLoading(false));
}

export default function* rootSaga() {
    yield all([takeLatest(GET_INITIAL_DATA, getInitialDataSaga)])
}
