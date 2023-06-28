import find from './find';

const arr = [8, 5, 7, 1, 5, 9, 7];

console.log(find(arr, 8)); // 0
console.log(find(arr, 7)); // 2
console.log(find(arr, 3)); // -1
console.log(find(arr, 1)); // 3
