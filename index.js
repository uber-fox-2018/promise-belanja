let beli = require('./beli')

let uang = 26000

let rokok = {'item': 'rokok', 'harga': 15000, 'waktu': 1000};
let korek = {'item': 'korek', 'harga': 5000, 'waktu': 1000};
let kopi = {'item': 'kopi', 'harga': 6000, 'waktu': 1000};

beli(uang, rokok)
.then(kembalian => {
    return beli (kembalian, korek)
})
.then(kembalian => {
    return beli (kembalian, kopi)
})
.catch(err => {
    console.log(err);
    
})