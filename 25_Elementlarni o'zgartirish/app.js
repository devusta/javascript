// // Element matnini o'zgartirish
// Tanlab olingan elementni matnini o'zgartirish uchun elementning maxsus 
// textContent attributidan foydalaniladi.

const headingEl = document.getElementById('sarlavha');
headingEl.textContent = 'Yangi matn';

// // Elementni qiymatini o'zgartirish
// Tanlab olingan element qiymatini o'zgartirish uchun elementning maxsus
// value attriburidan foydalanildi.

const inputEl = document.getElementById('username');
inputEl.value = 23;
inputEl.placeholder = 'Ismingizni kiriting!'

// // Elementning tanasini o'zgartirish
// Tanlab olingan elementning tanasini boshqa HTML element bilan almashtirish
// uchum elementning innerHTML attributidan foydalaniladi.

const headingEl2 = document.getElementById('sarlavha1');
headingEl2.innerHTML = "<h1>O'zgartirilgan sarlavha</h1>";