let beli = require('./beli.js')

let uang = 50000

let cimol = {item: 'cimol', harga: 5000, waktu: 1000}
let sabun = {item: 'sabun', harga: 12000, waktu: 2000}
let mieAyam = {item: 'mie ayam', harga: 10000, waktu: 3000}
let palu = {item: 'palu', harga: 20000, waktu: 2800}

beli(uang,cimol)
    .then(function(kembalian){
        return beli(kembalian,sabun)
        .then(function(kembalian){
            return beli(kembalian,mieAyam)
            .then(function(kembalian){
                return beli(kembalian,palu)
                .then(function(kembalian){
                    return kembalian
                })

            })
        })
    })

    .catch(function(err){
        console.log('uang ga cukup')
    })