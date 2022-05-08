import { Character } from "../../../entities";

export default interface StateTypes {
    characters: {
        getAllCharacters: Character[];
    }
    loading: {
        initialData: boolean;
    }
}