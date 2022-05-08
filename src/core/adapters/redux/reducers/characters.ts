import { UpdateCharacterActionType, UPDATE_GET_ALL_CHARACTERS } from "../actions";
import StateTypes from "./stateTypes";

type CharacterStateType = StateTypes['characters'];
const initState: StateTypes['characters'] = {
    getAllCharacters: [],
};

export default (
    state: CharacterStateType = initState,
    action: UpdateCharacterActionType,
): CharacterStateType => {
    const { characters, type } = action;
    switch (type) {
        case UPDATE_GET_ALL_CHARACTERS:
            return {
                ...state,
                getAllCharacters: characters
            }
        default: 
            return state;
    }
};