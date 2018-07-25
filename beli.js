function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.name}`)
    return new Promise((resolve, reject) => {
      if (uang >= obj.harga) { 
        uang -= obj.harga
        console.log(`Saya sudah membeli ${obj.name} uang kembaliannya ${uang}`);
        resolve (uang)
      }
        else {reject(`uang gk cukup nih buat beli ${obj.name} kembaliannya cuma ${uang}`)}
    })
}
module.exports = beli;
