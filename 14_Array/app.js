// Array
// 💡 Array - bir vaqtning o'zida bir nechta qiymatlarni o'zida saqlashi mumkin
// bo'lgan obyekt. Quyida languages nomli, 3 elementdan tashkil topgan
// array ko'rsatilgan.

// const languages = ['js', 'java', 'python'];
// console.log(languages);

// Array yaratish
// Array literal ko'rinishida
// 💡 Array yaratishning eng oson usuli array literal hisoblanib, to'rtburchak
// qavslar ([]) dan foydalanib yaratiladi.

// const mevalar = ['olma', 'nok', 'shaftoli', 'behi'];

// New kalit so'zidan foydalanib
// 💡 Javascript dasturlash tilidan array'larni  new  kalit so'zidan foydalanib
// ham yaratish imkoniyati mavjud.

// const mevalar = new Array('olma', 'nok', 'shaftoli', 'behi');
// console.log(mevalar);

// // Array o'zida turli xildagi qiymatlarni saqlash mumkin:
// const mixArray = ['mevalar', 2, false, null];

// Array elementini olish
// 💡 Array elementlarini uning index'laridan foydalanib olish mumkin.

// const helloArray = ['h', 'e', 'l', 'l', 'o'];
// console.log(helloArray[0])

// Array'ga element qo'shish
// 💡 Array'ga element qo'shish uchun push() yoki unshift() array
// metodlaridan foydalanish mumkin

// // push()  metodi yordamida array oxiriga element qo'shish mumkin:
// const languages = ['js', 'java'];
// console.log(languages);

// languages.push('go');
// console.log(languages);

// // unshift()  metodi yordamida array boshiga element qo’shish mumkin
// const languages = ['js', 'java'];
// console.log(languages);

// languages.unshift('go');
// console.log(languages);

// Array elementini o’zgartirish
// 💡 Array index’laridan foydalanib, uning element qiymatini o’zgartirish
// imkoniyati mavjud

// const languages = ['js', 'java', 'go'];
// console.log(languages);
// languages[1] = 'python';
// console.log(languages);

// Array elementini o’chirish
// 💡 pop() metodidan foydalanib array ichidagi oxirgi elementni o’chirish
// imkoniyati mavjud. Method o’chirilgan elementni qaytaradi

// const languages = ['js', 'java', 'go', 'swift'];
// console.log(languages);

// const deletedLanguage = languages.pop();
// console.log(languages);
// console.log(deletedLanguage);

// 💡 shift() metodidan foydalanib array ichidagi birinchi elementni
// o’chirish imkoniyati mavjud. Metod o’chirilgan elementni qaytaradi

// const languages = ['js', 'java', 'go', 'swift'];
// console.log(languages);

// const deletedLanguge = languages.shift();
// console.log(languages);
// console.log(deletedLanguge);

// Array uzunligini aniqlash
// 💡 Array uzunligi ya’ni uning ichidagi elementlar sonini aniqlash uchun
// length xossasidan foydalaniladi

const languages = ['js', 'java', 'go', 'swift'];

console.log(languages.length);

