const beli = require('./beli')

let money = 100000

let food = [{
    item: 'Nasi Goreng',
    harga: 10000,
    waktu: 2000,
},{
    item: 'Sushi',
    harga: 20000,
    waktu: 2000,
},{
    item: 'Lalapan',
    harga: 15000,
    waktu: 2000,
},{
    item: 'Mie Ayam',
    harga: 12000,
    waktu: 2000,
},{
    item: 'Sate Ayam',
    harga: 18000,
    waktu: 2000,
}]

beli(money,food[0])
.then((kembalian) => {
    return beli(kembalian,food[1])
})
.then((kembalian) => {
    return beli(kembalian,food[2])
})
.then((kembalian) => {
    return beli(kembalian,food[3])
})
.then((kembalian) => {
    return beli(kembalian,food[4])
})
.catch((err) => {
    console.log(err);
})