export default function find(arr: Array<number>, el: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}