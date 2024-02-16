// Funksiya 💼
// 💡 Funksiya - Javascript dasturlash tilining asoslaridan biri bo'lib uning
// yordamida ma'lum bir vazifani bajarish imkoni mavjud. Funksiya boshqa
// bir kod qismda chaqirilganda ishga tushadi. Funksiya yordamida kodni
// qayta ishlatish imkoniyati mavjud ya'ni bir martta e'lon qilib, bir necha
// joyda ishlatish imkoni mavjud.

// Function declaration
// 💡 Function declaration - function ka'lit so'zi yordamida e'lon qilinadi va
// berilgan scope bo'yicha ko'rinishga ega bo'ladi.

// function meningFunksiyam(son1, son2) {
//     console.log(son1 + son2);
//     // return son1 + son2;
//     // console.log('return dan so\'ng kelgan hech qaysi kod ishga tushmaydi.')
// }

// console.log(meningFunksiyam(10, 20));
// console.log(meningFunksiyam(20, 30));
// const result = meningFunksiyam(30, 50);
// console.log(result + 10);

// Agar funksiyani koddan keyin e'lon qilsak ham ishlayveradi.
console.log(kvadrat(2));

function kvadrat(son) {
    return son * son;
}

console.log(kvadrat(10));

function kub(son) {
    return son * son * son;
}

console.log(kub(3))
