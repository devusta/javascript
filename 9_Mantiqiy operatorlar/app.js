// Boolean logic (mantiq)
// 💡 Dasturlar o'zida ma'lum bir solishtirishlar orqali qaror qabul qiladi.
// Boolean mantiq - algebraning bir qismi bo'lib, barcha qiymatlar True (rost)
// yoki False (yolg'on) qiymatlardan tashkil topgan bo'ladi. Bu qiymatlar
// ma'lum bir shartni tekshirishda ishlatilinadi. Boolean logic asosiy uch
// operatordan tashkil topgan: AND, OR va NOT.

// const yosh = 17;
// const a = yosh > 18;
// const b = yosh < 20;

// // AND operatori
// console.log(a && b);

// // OR operatori
// console.log(a || b);

// // NOT operatori
// console.log(!a);
// console.log(!b);

// MASALA
const htmlPassed = false;
const cssPassed = false;
let message = '';

if (htmlPassed && cssPassed) {
    message = 'Siz Bootstrap kursini boshlashingiz mumkin!'
} else if (htmlPassed || cssPassed) {
    message = 'Iltimos, ikkinchi kursni ham tugatib chiqing!'
} else {
    message = 'Iltimos, ikkala kursini ham tugatib chiqing!'
}

console.log(message);
