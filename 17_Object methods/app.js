// Method
// 💡 JavaScript method - funksiya qiymatiga ega boʻlgan obyekt xususiyati

// this ka’lit so’zi
// 💡 Method ichida obyektning xususiyatlarini ishlatish uchun this ka’lit
// so’zidan foydalaniladi

const dasturchi = {
    ism: 'Asadbek',
    yosh: 25,
    salomlashish: function() {
        console.log(`Salom, mening ismim ${this.ism} va ${this.yosh} yoshdaman.`);
    }
}

dasturchi.salomlashish();

// Maxsus method’lar
// Object.keys()
// 💡 Object.keys() - berilgan obyektning ka’litlar ro’yhatini qaytaruvchi
// maxsus funksiya

console.log(Object.keys(dasturchi));

// Object.values() va Object.entries()
// 💡 Object.values() - berilgan obyektning qiymatlar ro’yhatini qaytaruvchi
// maxsus funksiya

console.log(Object.values(dasturchi));
console.log(Object.entries(dasturchi));