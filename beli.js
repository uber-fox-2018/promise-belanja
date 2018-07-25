function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)
  return new Promise(function(res, rej){
      setTimeout(function(){
          let kembalian = uang - obj.harga
          if (kembalian > 0) {
            console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
            res(kembalian)
          }else{
            var message = `uang gk cukup nih buat beli ${obj.item} yang harganya ${obj.harga} kembaliannya cuma ${uang}`;
            rej(message)
          }
        }, obj.waktu);
  })
  
}

module.exports = beli;
