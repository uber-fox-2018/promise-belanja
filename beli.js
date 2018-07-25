function beli(uang, obj){
  return new Promise ((resolve, reject)=> {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        resolve ({
          msg: `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`,
          change: kembalian
        })
      }else{
        reject ({
          msg: `uang gk cukup nih buat beli ${obj.item} uangnya kurang ${Math.abs(kembalian)}`,
          change: 0
        })
      }
    }, obj.waktu);
  })
}

module.exports = beli;
