// Objects
// 💡 JavaScript object - bir nechta ma'lumotlar to'plamini saqlashga imkon
// beruvchi ma’lumot turi (data-type).

// Object e’lon qilish (yaratish)
// 💡 Obyektlar figuralik qavslar ({}) yordamida yaratilinib, har bir xossasi
// (property) kalit:qiymat ko’rinishiga ega bo’ladi.

const dasturchi = {
    ism: 'Asadbek',
    familiya: 'Dusmatov',
    yosh: 25,
    kasb: 'talaba',
}

// Ma'lumotni turini ekranga chiqarish:
console.log(typeof dasturchi);

// Object'ning ma'lum xossasini ekranga chiqarish. 1-usul: 
console.log(dasturchi.ism, dasturchi.yosh, dasturchi.kasb, dasturchi.familiya);

// Object'ning ma'lum xossasini ekranga chiqarish. 2-usul: 
console.log(dasturchi['ism'], dasturchi['yosh'], dasturchi['kasb'], dasturchi['familiya']);

// Nested (ichma-ich) object’lar
// 💡 Object ichida boshqa object’ni saqlashi mumkin

const injener = {
    ism: 'Farxod', 
    familiya: 'Kamolov',
    yosh: 25, 
    manzil: {
        davlat: 'Uzbekistan',
        viloyat: 'Andijon', 
        tuman: 'Ulugnor',
    }
}

console.log(injener.manzil);
console.log(injener.manzil.davlat);
console.log(injener.manzil.tuman);

// Object method’lari
// 💡 Object o’z ichida funksiyalar saqlashi mumkin va ular method’lar deb
// nomlanadi

const quruvchi = {
    ism: 'Olimjon',
    yosh: 38,
    maktabgacha: 7,
    maktab: 11,
    salomlashish: function() {
        console.log('Salom');
    },
    tajribaHisoblash: function() {
        return this.yosh - this.maktabgacha - this.maktab;
    }, 
    pensiyagaQolganYil: function(number) {
        return number - this.yosh;
    }
}

quruvchi.salomlashish();
console.log('Quruvchining tajribasi ' + quruvchi.tajribaHisoblash() + ' yil.');
console.log('Quruvchi pensiyaga chiqishiga ' + quruvchi.pensiyagaQolganYil(60) + ' yil qoldi.')