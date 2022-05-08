import { Character } from "../entities";
import CharacterDetail from "../entities/characterDetail";
import { CharacterApiService } from "../useCases";
import Request from '../utils/request';

class CharacterService implements CharacterApiService {
    request: Request;

    constructor() {
        this.request = new Request();
    }

   async getAllCharacters(): Promise<Character[]> {
        const response = await this.request.get('/character');
        const result = response.data.results;
        const characters = result.map((character: any) => Character.fromJSON(character));
        return characters;
   }

   async getCharacterDetail(characterId: number): Promise<CharacterDetail> {
       const response = await this.request.get(`/character/${characterId}`);
       const result = response.data;
       const characterDetail = CharacterDetail.fromJSON(result);
       return characterDetail;
   }
}

export {CharacterService};