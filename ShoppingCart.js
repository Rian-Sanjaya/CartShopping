class Cart {
    constructor() {
        this.cart = {};
    }

    tambahProduk(kodeProduk, kuantitas) {
        if (kodeProduk && kuantitas) {
            this.cart[kodeProduk] = (this.cart[kodeProduk] || 0) + kuantitas;
        }
    }

    hapusProduk(kodeProduk) {
        if (this.cart[kodeProduk]) delete this.cart[kodeProduk];
    }

    tampilkanCart() {
        const key = Object.keys(this.cart);
        key.forEach( k => {
            console.log(k + ' (' + this.cart[k] + ')');
        });
    }
}

keranjang = new Cart();

keranjang.tambahProduk("Topi Putih", 2);

keranjang.tambahProduk("Kemeja Hitam", 3);

keranjang.tambahProduk("Sepatu Merah", 1);
keranjang.tambahProduk("Sepatu Merah", 4);
keranjang.tambahProduk("Sepatu Merah", 2);

keranjang.hapusProduk("Kemeja Hitam");

keranjang.hapusProduk("Baju Hijau");

keranjang.tampilkanCart();
