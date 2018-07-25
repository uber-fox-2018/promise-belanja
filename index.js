const beli = require('./beli.js');

beli(50000, {item: "permen", harga : 10000})
    .then(kembalianPermen=>{
        console.log(`Saya sudah membeli permen uang kembaliannya ${kembalianPermen}`)
        return beli(kembalianPermen, {item: "kopi", harga : 20000})
    })
    .then(kembalianKopi=>{
        console.log(`Saya sudah membeli kopi uang kembaliannya ${kembalianKopi}`)
        return beli(kembalianKopi, {item: "coklat", harga : 5000})
    })
    .then(kembalianCoklat=>{
        console.log(`Saya sudah membeli coklat uang kembaliannya ${kembalianCoklat}`)
        return beli(kembalianCoklat, {item: "teh", harga : 5000})
    })
    .then(kembalianTeh=>{
        console.log(`Saya sudah membeli teh uang kembaliannya ${kembalianTeh}`)
        return beli(kembalianTeh, {item: "kue", harga : 5000})
    })
    .then(kembalianKue=>{
        console.log(`Saya sudah membeli kue uang kembaliannya ${kembalianKue}`)
        return beli(kembalianKue, {item: "buku", harga : 15000})
    })
    .catch(error =>{
        console.log(error);
    })
