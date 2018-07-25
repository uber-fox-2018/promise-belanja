const beli = require('./beli')

let jajanan = [
  {
    item: 'Coklat',
    harga: 15000,
    waktu: 1000
  },
  {
    item: 'Roti',
    harga: 20000,
    waktu: 1500
  },
  {
    item: 'Kripik',
    harga: 10000,
    waktu: 900
  },
  {
    item: 'Ice Cream',
    harga: 25000,
    waktu: 1200
  }, 
  {
    item: 'Thai Milk',
    harga: 15000,
    waktu: 2000
  }
]

let uang = 10000
beli(uang, jajanan[0])
  .then(kembalian => {
    return beli(kembalian, jajanan[1])
  })
  .then(kembalian => {
    return beli(kembalian, jajanan[2])
  })
  .then(kembalian => {
    return beli(kembalian, jajanan[3])
  })
  .then(kembalian => {
    return beli(kembalian ,jajanan[4])
  })
  .catch(err => {
    console.log(err)
  })