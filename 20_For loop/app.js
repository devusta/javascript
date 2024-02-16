// // For loop
for (let i = 0; i < 10; i++) {
    console.log("Salom dunyo!");
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // sum = sum + i
}
console.log('1 dan 10 gacha bo\'lgan sonlar yig\'indisi ' + sum + ' ga teng.');

// // break
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

// // continue 
for (let i = 0; i <= 5; i++) {
    if ( i === 3) {
        continue;
    }
    console.log(i);
}
  