import { strict as assert } from 'assert';
import find from "./find";

describe('find element assert', () => {
  const mockArr: Array<number> = [3, 0, 32, 1, -4, 5];

  it('should find element', () => {
    const index = 3;
    const element = mockArr[index];

    assert.equal(find(mockArr, element), index);    
  });

  it('should return -1', () => {
    const element = 42;

    assert.equal(find(mockArr, element), -1);
  });
});

describe('find element expect', () => {
  const mockArr: Array<number> = [3, 0, 32, 1, -4, 5];

  it('should find element', () => {
    const index = 3;
    const element = mockArr[index];

    expect(find(mockArr, element)).toBe(index);
  });

  it('should return -1', () => {
    const element = 42;

    expect(find(mockArr, element)).toBe(-1);
  });
});
