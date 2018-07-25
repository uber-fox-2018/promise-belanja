const beli = require('./beli.js')

let makanan = {
  item: 'Nasi Goreng Petai',
  harga: 15000,
  waktu: 2000
}

let minuman = {
  item: 'Jus Sirsak',
  harga: 9000,
  waktu: 2000
}

let buku = {
  item: 'You don`t know Javascript',
  harga: 100000,
  waktu: 2000
}

beli(200000, minuman)
	.then(sisaUang => {
		return beli(sisaUang, buku)
    })
    .then( sisaUang => {
		return beli(sisaUang, minuman)
	})
	.then( sisaUang => {
		return beli(sisaUang, buku)
	})
	.then( sisaUang => {
		return beli(sisaUang, minuman)
	})
	.then( sisaUang => {
		return beli(sisaUang, makanan)
    })
    .catch(err => {
      console.log(err);
    })