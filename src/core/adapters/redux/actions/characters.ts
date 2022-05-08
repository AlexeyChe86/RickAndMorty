import { Character } from "../../../entities";

export const UPDATE_GET_ALL_CHARACTERS = 'UPDATE_GET_ALL_CHARACTERS';

export interface UpdateCharacterActionType {
    type: string;
    characters: Character[];
};

export const updateGetAllCharacters = (characters: Character[]): UpdateCharacterActionType => {
    return {
        type: UPDATE_GET_ALL_CHARACTERS,
        characters: characters
    }
}