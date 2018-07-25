function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)

  // setTimeout(function(){
    let kembalian = uang - obj.harga

    let promise= new Promise ((resolve, reject) => { 
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`)
        resolve(kembalian)
        
      } else {
        console.log(`uang gak cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`)
        reject(0)
      }    
    })

    return promise

  // }, obj.waktu)
}

module.exports = beli;