const beli = require(`./beli.js`)

class item {
    constructor(name, harga) {
        this.name = name
        this.harga = harga
    }
}

let roti = new item (`roti`,3000)
let susu = new item (`susu`,15000)
let snack = new item (`snack`,9000)
let coklat = new item (`coklat`,25000)
let beras = new item (`beras`,19000)

beli(60000,roti)
    .then(uang =>{
        return beli(uang,roti)
    })
    .then(uang =>{
        return beli(uang,susu)
    })
    .then(uang =>{
        return beli(uang,snack)
    })
    .then(uang =>{
        return beli(uang,coklat)
    })
    .then(uang =>{
        return beli(uang,beras)
    })
    .catch(error => {
        console.log(error);
    })
