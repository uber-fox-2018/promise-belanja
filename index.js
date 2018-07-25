const beli = require('./beli')
var candy = {item : 'candy', harga : 500, waktu : 2000}
var bread = {item : 'bread', harga : 17500, waktu : 5000}
var milk = {item : 'milk', harga : 2000, waktu : 2000}
var rice = {item : 'rice', harga : 3000, waktu : 2000}
var popCorn = {item : 'pop corn', harga : 3000, waktu : 2000}


beli(25000,candy)
.then((kembalian)=>{
    return beli(kembalian,bread)
})

.then((kembalian)=>{
    return beli(kembalian,milk)
})

.then((kembalian)=>{
    return beli(kembalian,rice)
})

.then((kembalian)=>{
    return beli(kembalian,popCorn)
})

.catch((err)=>{
    console.log(err);
})

