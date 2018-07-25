const beli= require ('./beli.js')

class Barang {
    constructor (nama, harga, waktu) {
        this.item= nama
        this.harga= harga
        this.waktu= waktu

    }
}

class Daging extends Barang {
    constructor () {
        super('Daging', 100000, 3000)
    }
}

class Ikan extends Barang {
    constructor () {
        super('Ikan', 90000, 3000)
    }
}

class Sayur extends Barang {
    constructor () {
        super('Sayur', 10000, 3000)
    }
}

class Buah extends Barang {
    constructor () {
        super('Daging', 20000, 3000)
    }
}

class Tahu extends Barang {
    constructor () {
        super('Tahu', 5000, 3000)   
    }
}

let daging= new Daging
let ikan= new Ikan
let sayur= new Sayur
let buah= new Buah
let tahu= new Tahu


beli(1000000, daging)
    .then(kembalian => {
    //console.log(kembalian)
    return beli(kembalian, ikan)
    })
    .then(kembalianIkan => {
    return beli(kembalianIkan, sayur)
    })
    .then(kembalianSayur => {
    return beli(kembalianSayur, buah)
    })
    .then(kembalianBuah => {
    return beli(kembalianBuah, tahu)
    })
    .then(kembalianTahu => {
    console.log(`selesai`)
    })
    .catch(err => {
    throw err
    })
