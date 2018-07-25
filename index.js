const beli = require('./beli')

let barang = [
    {item: 'kacang',harga: 2000,waktu: 1000,},
    {item: 'roko',harga: 25000,waktu: 200,},
    {item: 'kokakola',harga: 10000,waktu: 300,},
    {item: 'ao',harga: 5000,waktu: 2000,},
    {item: 'gorengan',harga: 15000,waktu: 500,},
  ]
  
  beli(100000,barang[0])
    .then(kembalian => {
      return beli(kembalian,barang[1])
    })
    .then(kembalian =>{
      return beli(kembalian,barang[2])
    })
    .then(kembalian =>{
      return beli(kembalian,barang[3])
    })
    .then(kembalian =>{
      return beli(kembalian,barang[4])
    })
    .catch(duitkurang=>{
      console.log(duitkurang)
    })
  