'use strict'
// Strict mode('use strict') yordamida js kodlarimiz orasidagi xatolardan qochish imkoniyati mavjud.

// 1. let - dasturimiz ishlashi davomida o'zgarishi mumkin bo'lgan o'zgaruvchilarni e'lon qilish uchun foydalaniladi.
// let turidagi o'zgaruvchiga misol
let yosh = 23;
console.log(yosh);
yosh = 24;
console.log(yosh);

// E'lon qilingan o'zgaruvchining qiymatini o'zgartirayotganda hech qanday kalit so'z(let va b.) kerak emas.

// 2. const - umuman o'zgarmas o'zgaruvchini e'lon qilishda foydalaniladi.
const id = 'AA0';
console.log(id);

// 3. var - ES6 ga qadar o'zgaruvchilarni e'lon qilish uchun ishlatilgan. let bilan deyarli bir xil vazifani bajaradi.
var yosh1 = 24;
console.log(yosh1);
yosh1 = 25;
console.log(yosh1);

// let va var deyarli o'xshash bo'lib ularning ma'lum bir farqi mavjud. var yordamida e'lon qilingan o'garuvchining
// ko'rinish ko'lam(scope)i funksiya darajasida bo'lsa, let esa block darajada bo'ladi.  

