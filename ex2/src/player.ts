import winCalculator from './win-calculator';

export class Player {
  constructor (
    private name: string,
    private level: number = 1,
    private lp: number = 100
  ) {}

  public isWinner(): boolean {
    if(this.lp < 10 || this.level < 20) {
      return false;
    }

    if (this.lp >= 95 && this.level >= 95) {
      true;
    }

    return winCalculator(this.lp + this.level) > 60;
  }
}

const p1 = new Player('foo', 10, 7);
console.log(p1.isWinner()); // false
