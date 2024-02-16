// String
// 💡 String - belgilar ketma-ketligidan tashkil topgan ma'lumot turi. Ularni
// bittalik ('') yoki ikkitalik ("") qo'shtirnoqlardan foydalanib yaratish imkoniyati
// mavjud. Ba'zi bir maxsus belgilardan tashkil topgan matnlarda odatda
// ikkitalik qo'shtirnoqlardan foydalaniladi.

// let ism = 'Asadbek';
// console.log(ism);

// let familiya1 = 'Do\'smatov';
// console.log(familiya1);

// let familiya2 = "Do'smatov";
// console.log(familiya2);

// Birlashtirish (Concatenation)
// 💡 Qo'shish (+) operatoridan foydalangan holda, string'larni qo'shish ya'ni
// concatenation qilish imkoniyati mavjud

// let ism = 'Asadbek';
// let message = 'Salom ' + ism + ' !';
// console.log(message);

// console.log('Salom ' + ism + ' !')

// Template literals
// 💡 ES6 template literals ko'rinishida string yaratish imkoniyatini taqdim etdi
// va ular backtick (``) belgisidan foydanalib yaratiladi

let ism = 'Asadbek';
let message = `Salom ${ism} !`;
console.log(message);