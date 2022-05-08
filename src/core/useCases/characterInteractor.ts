import { Character } from "../entities";
import CharacterDetail from "../entities/characterDetail";

export interface CharacterApiService {
    getCharacterDetail: (characterId: number) => Promise<CharacterDetail>;
    getAllCharacters: () => Promise<Character[]>;
}

export class CharacterInteractor {
    characterService: CharacterApiService;

    constructor(characterService: CharacterApiService) {
        this.characterService = characterService;
    }

    async getAllCharacters(): Promise<Character[]> {
        return this.characterService.getAllCharacters()
    }

    async getCharacterDetail(characterId: number): Promise<CharacterDetail> {
        return this.characterService.getCharacterDetail(characterId);
    }
}