
// // Event 
// Events (hodisalar) - foydalanuvchi yoki brauzerning o'zi tomonidan amalga oshirilishi
// mumkin bo'lgan brauzerda sodir bo'ladigan hodisalar

// Hodisalar yuz berganda unga javob berish(javascript funksiyasini ishga tushirish) orqali
// veb sahifamizni interaktiv qilishimiz mumkin

// Elementlarga hodisalarni bog'lashni 3 ta usuli mavjud:
// 1. Inline event handlers
// 2. Event handler properties
// 3. Event listeners

// // 1. Inline eventga misol:
// const changeHeading = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'Yangi sarlavha';
// }

// // 2. Inline event properties:
// const changeLetter = () => {
//     const heading1 = document.getElementById('heading1');
//     heading1.textContent = 'Qayta yozilgan sarlavha'.toUpperCase();
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.onclick = changeLetter;

// Event listeners
// Event listener - elementdagi hodisani tinglab turadi va shu hodisa yuz 
// berganda kerakli funksiyani ishga tushirib yuboradi.

const changeHeading3 = () => {
    const heading3 = document.getElementById('heading1');
    heading3.textContent = 'Yangi sarlavha';
}

const btn = document.getElementById('changeHeadingBtn');
btn.addEventListener('click', changeHeading3);
