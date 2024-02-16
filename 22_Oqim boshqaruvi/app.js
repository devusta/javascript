// // Oqim boshqaruvi

// // MASALA: Kiritilgan son berilgan chegara(range) ichidaligini aniqlovchi dastur tuzish:
// const inRange = (min, max, number) => {
//     if (number >= min && number <= max) {
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida.`);
//     } else {
//         console.log(`Berilgan ${number} soni ${min} va ${max} orasida emas`);
//     }
// }
// const minRange = 10;
// const maxRange = 30;
// const givenNumber = 20;

// inRange(minRange, maxRange, givenNumber);

// // MASALA: Berilgan sonlar ustida arifmetik amallar bajaring va natijani ekranga chiqaring:
// const simpleCalculator = (num1, num2, oper) => {
//     switch(oper) {
//         case "add":
//             console.log(`Yig'indisi: ${num1 + num2}`);
//             break;
//         case "subtract":
//             console.log(`Ayirmasi: ${num1 - num2}`);
//             break;
//         case "multiply":
//             console.log(`Ko'paytmasi: ${num1 * num2}`);
//             break;
//         case "divide":
//             console.log(`Bo'linmasi: ${num1 / num2}`);
//             break;
//         default: 
//             console.log(`Aniqlanmangan amal`);
//     }
// }

// const a = 20;
// const b = 2;
// const operation = "divide";
// simpleCalculator(a, b, operation);

// MASALA: Arraydagi eng katta elementni ekranga chiqaring:
const getLargestElement = (array) => {
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest;
}

const nums = [1, 2, 345, 470, 5];
const result = getLargestElement(nums);
console.log(`Eng kata element: ${result}`);