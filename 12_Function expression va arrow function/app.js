// Function expression
// 💡 Function expression - function ka'lit so'zi yordamida e'lon qilinadi va
// ma'lum bir o'zgaruvchiga tenglab qo'yiladi.

// const kvadrat = function(son) {
//     return son * son;
// }

// console.log(kvadrat(10));

// Arrow function 💼
// 💡 Arrow function - function expression yozishning qisqaroq ko'rinishi.
// Bunday turdagi funksiyalarni yozishni turli xil yo'llari mavjud.
// Arrow functionga misol:
// const kvadrat = (son) => {
//     return son * son;
// }

// console.log(kvadrat(3));

// 1. Agar funksiya faqatgina bitta parametrdan tashkil topgan bo'lsa parametrga qavs bermasa ham bo'ladi. Quyidagicha:
// const kub = son => {
//     return son * son * son;
// }

// console.log(kub(3));

// 2. Agar funksiyaning tana qismi bitta statementdan tashkil topgan bo'lsa, return so'zini yozmaslik mumkin. Quyidagicha:
// const kvadrat = son => son * son;

// console.log(kvadrat(5));

// 3. Agar funksiya hech qanday parametrga ega bo'lmasa, quyidagicha yozish mumkin.
// const print1 = () => console.log('Printing...');
// print1();

// const print = () => {
//     console.log('Printing...');
//     console.log('Second printing...')
// }

// print();

// 4. Agar funksiyada ikki yoki undan ortiq parametr mavjud bo'lsa, parametrlar qavs bilan yozilish shart. Quyidagicha: 
const volume = (a, b, c) => a * b * c;

console.log(volume(1, 2, 3));
