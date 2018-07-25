const beli = require ('./beli');

let candy = {
  item: 'candy',
  harga: 1000,
  waktu: 1000
}

let gum = {
  item: 'gum',
  harga: 2000,
  waktu: 2000
}

let chips = {
  item: 'chips',
  harga: 5000,
  waktu: 5000
}

let money = 2000

beli(money, candy)
.then(result => {
  console.log(result.msg)
  return beli(result.change, chips)}
)
.then(result => {
  console.log(result.msg)
  return beli(result.change, gum)}
)
.then(result => {
  console.log(result.msg)}
)
.catch (result => {
  console.log(result.msg)
})