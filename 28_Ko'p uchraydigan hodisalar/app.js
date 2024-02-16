// // Ko'p uchraydigan hodisalar
// Javascript dasturimizda ko'pincha quyidagi hodisalar bilan birga ishlaymiz:
// - MouseEvents
// - FormEvents
// - KeyboardEvents

// // Mouse Events - eng ko'p ishlatiladigan hodisalar qatoriga kiradi. Ular
// sichqonchaning tugmachalarini bosish yoki sichqoncha ko'rsatgichini olib borish va
// harakatlantirishga tegishli bo'lgan hodisalarni o'z ichiga oladi.

// click - sichqoncha bosilib va qo'yib yuborilganda ishga tushadi.
// dblclick - elementga ikki marta bosilganda ishga tushadi.
// mouseenter - sichqoncha elementni ustiga kelganda ishga tushadi.
// mouseleave - sichqoncha elementni tark etganda ishga tushadi.
// mousemove - sichqoncha element ichida harakat qilganda ishga tushadi.

// click eventi
const notifyClick = () => {
    console.log('Element bir marta bosildi.')
}

const btn1 = document.getElementById('btn-1');
btn1.addEventListener('click', notifyClick);

// dblclick eventi
const notifyDoubleClick = () => {
    console.log('Element ikki marta bosildi.');
}

const btn2 = document.getElementById('btn-2');
btn2.addEventListener('dblclick', notifyDoubleClick)

// mouseenter eventi
const notifyMouseEnter = () => {
    console.log('Tugma bosildi.');    
    const btn3 = document.getElementById('btn-3');
    btn3.textContent = 'Mouseenter btn'
}

const btn3 = document.getElementById('btn-3');
btn3.addEventListener('mouseenter', notifyMouseEnter,);

// mouseleave eventi
const text = document.createTextNode(' Tugma bosildi.');

const notifyMouseLeave = () => {
    console.log('Tugmadan sichqoncha olindi');
    btn4.appendChild(text);

}

const btn4 = document.getElementById('btn-4');
btn4.addEventListener('mouseleave', notifyMouseLeave);

// mousemove eventi
const notifyMouseMove = () => {
    const btn5 = document.getElementById('btn-5');
    btn5.style.backgroundColor = 'red';
    btn5.style.width = '200px';
}

const btn5 = document.getElementById('btn-5');
btn5.addEventListener('mousemove', notifyMouseMove);



// // Form events - forma bilan ishlaganda yuz beradigan hodisalar:
// - submit - form jo'natilganda submit ishga tushadi.
// - focus - element fokus bo'lganda ishga tushadi.
// - blur - element fokus yo'qotganda ishga tushadi.


// // Keyboard Events - klaviatura tugmachasini bosish, qo'yib yuborish va tugmani
// bosib ushlab turish kabi hodisalarni o'z ichiga oladi:
// - keydown - klaviatura tugmasi bosilganda ishga tushadi.
// - keyup - klaviatura tugmasi qo'yib yuborilganda ishga tushadi.
// - keypress - klaviatura tugmasi bosilib turganda ishga tushadi.

document.addEventListener('keydown', event => {
    console.log('key: ' + event.key);
    console.log('code ' + event.code);
})