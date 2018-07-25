class Beli{
    constructor(){

    }
    barang(){
        return new Promise((resolve, reject) =>{
            // console.log(this)
            if(this.money >= this.cost){
                resolve(this.money - this.cost)
            }else{
                reject('uang tidak cukup')
            }
        })
    }
}

class Item extends Beli{
    constructor(name,harga,uang){
        super()
        this.name = name
        this.cost = harga
        this.money = uang
    }
}

let kuaci = new Item('kuaci',1000, 5000)

kuaci.barang()
    .then(kembalian =>{
        // roti.barang()
        console.log(`beli kuaci, sisa uang ${kembalian}`);
        let roti = new Item('roti',2000,kembalian)
        return roti.barang()
    })
    .then(kembalian =>{
        console.log(`beli roti, sisa uang ${kembalian}`);
        let permen = new Item('permen',500,kembalian)
        return permen.barang()
    })
    .then(kembalian =>{
        console.log(`beli permen, sisa uang ${kembalian}`);
        let minyak = new Item('minyak',2000,kembalian)
        return minyak.barang()
    })
    .catch(err =>{
        console.log(err);
    })
