import { Player } from './player';

jest.mock('./win-calculator');

describe('Player class', () => {
  describe('Player win calculator', () => {
    it('should return false if lp < 10', () => {
      const fooPlayer = new Player('foo', 90, 3);

      expect(fooPlayer.isWinner()).toBeFalsy();
    });

    it('should return false if level < 20', () => {
      const fooPlayer = new Player('foo', 10, 99);

      expect(fooPlayer.isWinner()).toBeFalsy();
    });

    it('should return true if level >= 95 and lp >= 95', () => {
      const fooPlayer = new Player('foo', 95, 99);

      expect(fooPlayer.isWinner()).toBeTruthy();
    });

    it('should return true if win percentage > 60', () => {
      const fooPlayer = new Player('foo', 99, 60);

      expect(fooPlayer.isWinner()).toBeTruthy();
    });
  });
});
