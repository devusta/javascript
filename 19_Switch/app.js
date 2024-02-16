// // Switch 
// Javascript dasturlash tilida qaror qabul qilishda switch statement'idan foydalaniladi. Switch statement 
// berilgan ifodani baholab, shunga to'g'ri keluvchi kod blokni ishga tushirib yuboradi.

const number = 2;
let output;

switch (number) {
    case 1:
        output = 'bir';
        break;
    case 2:
        output = 'ikki';
        break;
    default:
        output = 'topilmadi';
        break;
}
console.log('Qiymat: ' + output);

const text = 'javascript';
let result;

switch (text) {
    case 'javascript':
        result = 'true';
        break;
    case 'python':
        result = 'false';
    default:
        result = 'topilmadi.'
}
console.log(`Javob: ${result}`);






