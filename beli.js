function beli(uang, obj){ // before function beli(uang, obj, cb){
  return new Promise(function(resolve,reject){
    console.log(`Saya pergi membeli ${obj.nama}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.nama} uang kembaliannya ${kembalian}`);
        resolve(kembalian)//before cb(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.nama} kembaliannya cuma ${kembalian}`);
        reject(0)//before cb(0)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
