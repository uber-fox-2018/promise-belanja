function beli(uang, obj){
    let kembalian = uang - obj.harga
    return new Promise((resolve, reject)=>{
        if (kembalian > 0) {
            resolve(kembalian)
        }else{
            reject(`uang gak cukup nih buat beli ${obj.item}, uang saya hanya ${uang}`)
        }
    })
}

module.exports = beli;
