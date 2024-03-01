// let weight = Number(prompt("Kilonuzu giriniz: "));
// let height = Number(prompt("Boyunuzu metre(m) cinsinden giriniz: "))
// let sonuc= weight/(height*2);

// if(sonuc<18.5){
//     console.log("İdeal kilonun çok altında"+sonuc)
// }
// else if(sonuc>=18.5 && sonuc<=24.9){
//     console.log("İdeal kilonun altında"+sonuc)
// }
// else if(sonuc>=25 && sonuc <=29.9){
//     console.log("İdeal kiloda"+sonuc)
// }
// else if(sonuc>=30 && sonuc <=39.9){
//     console.log("İdeal kilonun üstünde"+sonuc)
// }
// else if(sonuc>=40){
//     console.log("İdeal kilonun çok üstünde (Morbid obez)"+sonuc)
// }
let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir ="\r\n" ;

const yakitMetni =
"1-Dizel"+yeniSatir
+ "2-Benzin"+yeniSatir
+ "3-LPG"+yeniSatir
+ "Yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);
if(yakitTipi == "1" ||yakitTipi == "2"||yakitTipi == "3"){
let yakitLt= prompt("Yakıt litresini giriniz")
let bakiye= prompt("Bakiyenizi giriniz")

if (yakitTipi==1) {
    let odenecekTutar = dizel * yakitLt;
    if(odenecekTutar<bakiye){
        bakiye = bakiye-odenecekTutar;
        alert("Yakıt alma işlemi başarılı"+yeniSatir+"Kalan bakiye: "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+"Ödenecek Tutar: "+odenecekTutar+yeniSatir
        +"Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye))
    }

}else if(yakitTipi=="2"){
    let odenecekTutar = benzin* yakitLt;
    if(odenecekTutar<bakiye){
        bakiye = bakiye-odenecekTutar;
        alert("Benzin alma işlemi başarılı"+yeniSatir+ "Kalan bakiye: "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+"Ödenecek Tutar: "+odenecekTutar+yeniSatir
        +"Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye))
    }

}else if(yakitTipi=="3"){
    let odenecekTutar = lpg* yakitLt;
    if(odenecekTutar<bakiye){
        bakiye = bakiye-odenecekTutar;
        alert("lpg alma işlemi başarılı"+yeniSatir+ "Kalan bakiye: "+bakiye)
    }else{
        alert("Bakiyeniz yeterli değil"+yeniSatir+"Ödenecek Tutar: "+odenecekTutar+yeniSatir
        +"Bakiye: "+bakiye+yeniSatir+"Eksik Tutar: "+(odenecekTutar-bakiye))
    }
}else{
    alert("Lütfen geçerli bir yakıt türü seçiniz")
}
}

