// // getElementById - metodi HTML hujjatimizdagi elementni 
// ID orqali tanlab olish imkonini beradi.

// const heading1 = document.getElementById('sarlavha');
// console.log(heading1);
// heading1.remove();

// // getElementsByName - metodi HTML hujjatimizdagi elementlarni nomi orqali 
// tanlab olish imkonini beradi.

// const inputEls = document.getElementsByName('username');
// const inputEl = inputEls[0]
// console.log(inputEl);
// inputEl.remove();

// // getElementsByClassName - motodi HTML hujjatimizdagi elementlarni class nomi orqali tanlab 
// olish imkonini beradi.

// const headings = document.getElementsByClassName('heading');
// console.log(headings);
// const heading1 = headings[0], heading2 = headings[1];
// console.log(heading1, heading2);
// heading1.remove()

// // getElementsByTagName - metodi HTML hujjatimizdagi elementlarni 
// tag nomi orqali tanlab olish imkoni mavjud.

// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// // querySelector - metodi HTML hujjatimizdagi elementni CSS selektor orqali
// tanlab olish imkonini beradi.

// const heading1 = document.querySelector('#sarlavha'); // CSS ID selector orqali
// console.log(heading1);
// const paragraph = document.querySelector('.parag'); // CSS class selector orqali
// console.log(paragraph);

// // querySelectorAll - metodi HTML hujjatimizdagi ko'plab elementlarni CSS selektor
// orqali tanlab olish imkonini beradi.

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
