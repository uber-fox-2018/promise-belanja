const beli = require('./beli')

class ObjItem {
 constructor(item, harga, waktu) {
     this.item = item
     this.harga = harga
     this.waktu = waktu
 }
}

let gula = new ObjItem("Gula", 2000, 2000)
let kopi = new ObjItem("Kopi", 5000, 2000)
let teh = new ObjItem("Teh", 1000, 2000)
let beras = new ObjItem("Beras", 10000, 2000)
let mie = new ObjItem("Mie", 1700, 2000)

let uang = 100000

beli(uang, gula)
.then((kembalian) => {
    return beli(kembalian, kopi)
})

.then((kembalian) => {
    return beli(kembalian, teh)
})

.then((kembalian) => {
    return beli(kembalian, beras)
})

.then((kembalian) => {
    return beli(kembalian, mie)
})

.catch((err) => {
    console.log(err);
})
