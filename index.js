const beli = require('./beli')

beli(20000, {
    item: 'Nasi Uduk',
    harga: 8000,
    waktu: 1000
})
.then(kembalian => {
    console.log(kembalian);
    return beli(kembalian, {
        item: 'Nasi Goreng',
        harga: 5000,
        waktu: 1000
    })
})
.then(kembalian => {
    console.log(kembalian);
    return beli(kembalian, {
        item: 'Nasi Padang',
        harga: 3000,
        waktu: 1000
    })
})
.then(kembalian => {
    console.log(kembalian);
    return beli(kembalian, {
        item: 'Nasi Baprek',
        harga: 3000,
        waktu: 1000
    })
})
.then(kembalian => {
    console.log(kembalian);
    return beli(kembalian, {
        item: 'Nasi benyek',
        harga: 2000,
        waktu: 1000
    })
})
.then(kembalian => {
    console.log(kembalian);
})
.catch(finished => {
    console.log(finished);
})