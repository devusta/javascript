// Array methods


// // concat() 
const array1 = [1, 5, 11];
const array2 = [3, 4, 7];
const result = array1.concat(array2);
console.log(result);

const result1 = array1.concat('men', 'sen');
console.log(result1);

// // find()
// const findValue = (number) => number === 3; 
// const foundValue = result.find(findValue);
// console.log(foundValue);

// Yuqoridagi kodning qisqa ko'rinishi:
const foundValue = result.find((number) => number === 3);
console.log(foundValue);

// // filter()
// const filterValue = (number) => number > 3;
// const filteredValue = result.filter(filterValue);
// console.log(filteredValue);

// Yuqoridagi kodning qisqa ko'rinishi:
const filteredValue = result.filter(number => number > 3);
console.log(filteredValue);

// // map()
// const mapValues = number => 'Son ' + number;
// const mapedValues = result.map(mapValue);
// console.log(mapedValue);

// Yuqoridagi kodning qisqa ko'rinishi:
const mapedValues = result.map(number => 'Son ' + number);
console.log(mapedValues);

// // sort()
const sortValues = (number1, number2) => number1 - number2;
result.sort(sortValues)
console.log(result);
