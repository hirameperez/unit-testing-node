import { Response } from 'express';

import { CharactersController } from './characters.controller';
import { CharactersService  } from './characters.service';

const mockCharacters = [
  {
    id: 1,
    name: 'Rick Sanchez',
    type: '',
    species: 'Human'
  },
  {
    id: 2,
    name: 'Morty Smith',
    type: '',
    species: 'Human'
  },
  {
    id: 14,
    name: 'Alien Morty',
    type: '',
    species: 'Alien'
  },
  {
    id: 22,
    name: 'Amish Cyborg',
    type: '',
    species: 'Alien'
  },
  {
    id: 42,
    name: 'Foo',
    type: '',
    species: 'Animal'
  }
];

const mockLogger = {
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn()
};

const mockHttp = {
  get: async () => ({
    info: {},
    results: mockCharacters
  })
};

describe('Characters Controller', () => {
  let controller: CharactersController;
  let chrSrv: CharactersService;
  let mockRes: Response;

  beforeEach(() => {
    mockRes = {
      status: jest.fn((status: number) => {
        mockRes.statusCode = status;
      })
    } as unknown as Response;

    chrSrv = new CharactersService(mockHttp);
    controller = new CharactersController(mockLogger, chrSrv);
  });

  describe('Get all the characters', () => {
    it('should return all the human characters', async () => {
      const chars = await controller.getAll(mockRes);
      const resSpy = jest.spyOn(mockRes, 'status');
      
      expect(resSpy).toHaveBeenCalledTimes(1);
      expect(resSpy).toHaveBeenCalledWith(200);
      expect(chars).toStrictEqual([{
        id: 1,
        name: 'Rick Sanchez',
        type: '',
        species: 'Human'
      },
      {
        id: 2,
        name: 'Morty Smith',
        type: '',
        species: 'Human'
      }]);
    });

    // it('should return only "alien" charactes', async () => {
      
    // });

    // it('should return 503', async () => {
      
    // });
  });
});
