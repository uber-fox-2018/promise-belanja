const beli = require('./beli');

class Item {
    constructor(nama, harga, waktu) {
        this.item = nama,
        this.harga = harga,
        this.waktu = waktu
    }
}

let items = [
    new Item('permen', 1000, 1000),
    new Item('roti', 12000, 1000),
    new Item('coklat', 15000, 1000),
    new Item('donat', 10000, 1000),
    new Item('snack', 8500, 1000),
    new Item('es krim', 4000, 1000),
    new Item('buah', 18000, 1000)
]
beli(50000, items[0])
    .then(sisaUang => {
        return beli(sisaUang, items[1]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[2]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[3]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[3]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[4]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[5]);
    })
    .then(sisaUang => {
        return beli(sisaUang, items[6]);
    })
    .catch(sisaUang => {
        console.log(`Sisa uang ${sisaUang} buat saya aja ya...`);
    })






