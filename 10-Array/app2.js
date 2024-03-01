// let sayilar = [1,2,3,4,5,"world of tanks"]
// //sayilar[5]= "League of Legends";
// sayilar[sayilar.length-1]="Call of Duty"

let urun1 = {
    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat: 6.219
}
let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: 15.475
}
let urun3 = {
    isim: "Acer Gaming Aspire7",
    kategori: "Teknoloji",
    fiyat: 13.999
}
let urun4 = {
    isim: "Lenovo V15",
    kategori: "Teknoloji",
    fiyat: 10.999
}
let urun5 = {
    isim: "Lenovo V14",
    kategori: "Teknoloji",
    fiyat: 6.219
}
let urun6 = {
    isim: "Lenovo Ideapad",
    kategori: "Teknoloji",
    fiyat: 4.510
}
let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filteredProd = [];
let kullaniciUrunIsmi = prompt("Bir ürün giriniz");

fillFilteredProd(urunler);
writeFilteredProd(filteredProd)

function fillFilteredProd(urunler) {

    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filteredProd.push(urun);
        }
    })
}

function writeFilteredProd(urunler) {
    urunler.forEach(function (urun) {
        console.log("---------------------------------")
        console.log("| " + urun.isim + " | " + urun.fiyat + " | " + urun.kategori)
        console.log("---------------------------------")
    })
}