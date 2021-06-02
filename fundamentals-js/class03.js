//numbers

let age = 25;
age += 1;

console.log(age);

let weight = 60;
weight -= 2;

console.log(weight);

let originalNumber = 777.777;

let number = Math.round(originalNumber);
let testNumber = originalNumber.toFixed(4);
let secondTestNumber = parseFloat(testNumber);

console.log(number);
console.log(testNumber);
console.log(secondTestNumber);