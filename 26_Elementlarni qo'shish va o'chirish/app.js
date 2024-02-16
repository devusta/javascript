// // Elementlarni qo'shish o'chirish
// Javascript dasturlash tilida DOM API'ning createElement() metodini charqirish orqali
// yangi element yaratish imkoni mavjud.

// const paragraph = document.createElement('p');
// console.log(paragraph);

// // DOM API orqali text yaratish uchun uning createTextNode() metodidan foydalaniladi.

// const text = document.createTextNode('Bu yerda xatboshi yozilgan.');
// console.log(text);

// // Element qo'shish 
// DOM API'ning appendChild() metodini chaqirish orqali element'larni o'zaro qoshish
// imkoniyati mavjud.

const paragraph = document.createElement('p');
const text = document.createTextNode('Bu yerda xatboshi yozilgan.');

paragraph.appendChild(text);
console.log(paragraph);

// // elementni ekranga chiqarish

const box = document.getElementById('box');
box.appendChild(paragraph);
console.log(box);

// // DOM API orqali berilgan node elementning parent(ota-ona) va child(farzand)
// elementlarini ko'rish imkoniyati mavjud. Parent'ni ko'rish uchun berilgan elementning
// parentElement yoki ParentNode attributiga murojaat qilishimiz mumkin.
// Childrenlarni ko'rish uchun esa children yoki childNodes attributiga murojaat qilish kerak bo'ladi. 

console.log(box.parentElement);
console.log(box.children);

// // Elementni o'chirish

paragraph.remove();