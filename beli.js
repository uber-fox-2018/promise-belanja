function beli(uang, obj) {
	return new Promise( (resolve, reject) => {
		console.log(`Saya pergi membeli ${obj.item}`)
		setTimeout( () => {
			let kembalian = uang - obj.harga;
				
			if(kembalian > 0) {
				console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
				resolve(kembalian)
			} else {
				let tekor = `uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`
				reject(tekor)
			}
		}, obj.waktu);
	});
}

module.exports = beli;