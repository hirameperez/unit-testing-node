import { Http } from './lib/http';

export enum CharacterSpecies {
  HUMAN = 'Human',
  ALIEN = 'Alien',
  ANIMAL = 'Animal'
}

export interface Character {
  id: number;
  species: string;
  type: string;
  name: string;
}

export class CharactersService {
  constructor(private readonly httpService: Http) {}

  async getAllCharacters(species: CharacterSpecies): Promise<Character[]> {
    const characters: Character[] = [];

    const apiCharacters = await this.httpService.get('https://rickandmortyapi.com/api/character')
      .then(res => {        
        return res.results
      });

    return apiCharacters
      .filter(char => char.species === species)
      .map(char => ({
        id: char.id,
        species: char.species,
        type: char.type,
        name: char.name
      })) as unknown as Character[];
  }
}