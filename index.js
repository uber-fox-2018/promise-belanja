let beli = require('./beli.js');

let uang = 50000;

let icecream = {'item': 'icecream', 'harga': 20000, 'waktu': 1000};
let noodles = {'item': 'noodles', 'harga': 15000, 'waktu': 3000};
let cola = {'item': 'cola', 'harga': 10000, 'waktu': 1000};
let juice = {'item': 'juice', 'harga': 10000, 'waktu': 2000};


beli(uang, icecream)
.then(function (kembalian) {
    return beli(kembalian, noodles)
    .then(function (kembalian) {
        return beli(kembalian, cola)
        .then(function (kembalian) {
            return beli(kembalian, juice)
            .then(function (kembalian) {
                return kembalian
            })
        })
    })
})
.catch(function (err) {
    console.log(`Not enough money`);
})