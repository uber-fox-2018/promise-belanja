const beli = require('./beli')

class Barang{
    constructor(nama,harga,waktu){
        this.nama = nama,
        this.harga = harga,
        this.waktu = waktu
    }
}

let kopi = new Barang('kopi',3000,500)
let gorengan = new Barang('gorengan',2000,500)
let wafer = new Barang('wafer',1000,500)

beli(10000,kopi)
.then((kembalian) =>{
    return beli(kembalian,gorengan)
})
.then((kembalian)=>{
    return beli (kembalian,wafer)
})
.then((kembalian)=>{
    return beli(kembalian,kopi)
})
.then((kembalian) =>{
    return beli(kembalian,gorengan)
})
.catch(()=>{

})