// Type conversion
// 💡 Type conversion - Javascript dasturlash tilida saqlanayotgan ma'lumot
// turini bir ko'rinishdan ikkinchi ko'rinishga o'tkazish

// 💡 Number - primitiv o'rab turuvchi obyektidan foydalanib, berilgan ma'lumot
// turini son ko'rinishiga o'tkazish imkoniyati mavjud. Agar berilgan ma'lumot
// son ko'rinishiga o'tkazishni imkoni bo'lmasa, NaN maxsus qiymati yuzaga
// keladi.

// const yosh = '23';
// console.log(yosh);
// console.log(Number(yosh));

// console.log(yosh + 1);
// console.log(Number(yosh) + 1);

// const ism = 'Asadbek';
// console.log(Number(ism));

// String
// 💡 String - primitiv o'rab turuvchi obyektidan foydalanib, berilgan ma'lumot
// turini string ko'rinishiga o'tkazish imkoniyati mavjud.

// const yil = 2024;
// console.log(yil);
// console.log(String(yil));

// Type coercion 💼
// 💡 Type coercion - Javascript dasturlash tilida operator turli xil qiymatlar
// ustida ish olib borayotganda, ulardan birining avtomatik ravishda boshqa
// turga o'tishi. Boshqa qilib aytganda ma'lumot turini avtomatik ravishda bir
// ko'rinishdan ikkinchi ko'rinishga o'tishi.

// // Auto string conversion
// console.log('Men ' + 1999 + ' yilda tug\'ilganman.');

// // Auto number conversion
// console.log('30' - '10' - 5);

// Truthy va Falsy 💼
// 💡 Javascript dasturlash tilida berilgan qiymatni Boolean ko'rinishga
// o'tkazilganda, ular Truthy yoki Falsy ko'rinishga keladi. Truthy bu true
// ya'ni rost qiymatiga ega bo'lgan ma'lumotlar, Falsy esa false qiymatiga
// ega bo'lganlarga aytiladi.

// // Falsy ko'rinishga keladigan qiymatlar
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

// // Truthy qiymatlar
// console.log(Boolean('Asadbek'));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));

//MASALA
const ism = '';

if (ism) {
    console.log('Sizning ismingiz ' + ism);
} else {
    console.log('Iltimos, ismingizni kiriting!')
}