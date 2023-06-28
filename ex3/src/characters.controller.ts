import { Response } from 'express';
import { Logger } from './lib/logger';
import { Http } from './lib/http';
import { Character, CharactersService, CharacterSpecies } from './characters.service';

export class CharactersController {
  constructor(
    private readonly logger: Logger,
    private readonly charactersService: CharactersService
  ) {}

    async getAll(res: Response, specie: CharacterSpecies = CharacterSpecies.HUMAN) {
      try {
        this.logger.log(`Retrieving all the charactes: ${specie}`);

        const characters = await this.charactersService.getAllCharacters(specie);

        res.status(200);
        return characters;
      } catch (err) {
        res.status(503);
        
        this.logger.error('Error trying to get all characters', err);
        return 'Not available';
      }
    }
}

// (async () => {
//   const logger = new Logger();
// const http = new Http();

// const chrSrv = new CharactersService(http);

// const controller = new CharactersController(logger, chrSrv);

// const characters = await controller.getAll(res, 'human');

// console.log(characters)
// })();


