const beli = require('./beli')

let uang = 50000

let makanan = [{
    item: 'Nagor',
    harga: 10000,
    waktu: 500
},
{
    item: 'Teh Tarik',
    harga: 10000,
    waktu: 200
},
{
    item: 'Cumi',
    harga: 5000,
    waktu: 1000
},
{
    item: 'Permen',
    harga: 5000,
    waktu: 200
},
{
    item: 'Martabak',
    harga: 30000,
    waktu: 100
}]

beli(uang, makanan[0])
.then(kembalian => {
    return(beli(kembalian, makanan[1]))
})
.then(kembalian => {
    return(beli(kembalian, makanan[2]))
})
.then(kembalian => {
    return(beli(kembalian, makanan[3]))
})
.then(kembalian => {
    return(beli(kembalian, makanan[4]))
})
.catch(err => {
    console.log(err)
})