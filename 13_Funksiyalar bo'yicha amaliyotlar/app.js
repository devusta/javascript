// 1-MASALA: Berilgan sonni juft yoki toq ekanligini aniqlab beradigan funksiya tuzish

// // Function declaration
// function evenOrOddDec(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even.`);
//     } else {
//         console.log(`${number} is odd.`);
//     }
// }

// evenOrOddDec(3);

// // Function expression
// const evenOrOddExp = function(number) {
//     if (number % 2 === 0) {
//         console.log(`${number} is even.`)
//     } else {
//         console.log(`${number} is odd.`)
//     }
// }

// evenOrOddExp(3);

// // Arrow function
// const evenOrOddArrow = number => {
//     if (number % 2 === 0) {
//         console.log(`${number} is even.`)
//     } else {
//         console.log(`${number} is odd.`)
//     }
// }

// evenOrOddArrow(3);

// 2-MASALA: Berilgan ikki sondan kattasini qaytaradigan funksiya yozish:

// // Function declaration
// function maxDec(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }

// console.log(maxDec(15, 13));

// // Function expression 
//----------1-misol--------//
// const maxExp = function(number1, number2) {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }

// console.log(maxExp(5, 4));

// //---------2-misol--------//
// const maxExp = function(number1, number2) {
//     if (number1 >= number2) {
//         console.log(number1);
//     } else {
//         console.log(number2);
//     }
// }

// maxExp(8, 5)

// // Arrow function 
// const maxArrow = (number1, number2) => {
//     if (number1 >= number2) {
//         return number1;
//     }
//     return number2;
// }

// console.log(maxArrow(7, 4));

// Berilgan sonni teskarisiga o'girib, qaytaradigan funksiya yozish:

// // Function declaration 
// function reverseDec(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }

// console.log(reverseDec(12345))

// // Function expression 
// const reverseExp = function(number) {
//     const numberStr = String(number);
//     const reversedStr = numberStr.split('').reverse().join('');
//     return Number(reversedStr);
// }

// console.log(reverseExp(12345))

// Arrow function 
const reverseArrow = number => {
    const numberStr = String(number);
    const reversedStr = numberStr.split('').reverse().join('');
    return Number(reversedStr);
}

console.log(reverseArrow(789));