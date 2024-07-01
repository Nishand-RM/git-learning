//odd numbers
const arr = [1 , 2, 4, 9, 12, 13, 20];
const odd = [];
arr.forEach((num) => num % 2 === 1 && odd.push(num));
console.log(odd);

