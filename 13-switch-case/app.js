
// let sayi = prompt("Lütfen 1 ile 7 arasında bir sayı giriniz")
// let yeniSatir ="\r\n";
// switch (sayi) {
    
//     case "1":
//         console.log("Pazartesi ve Haftaiçi")
//         //break;

//     case "2":
//         console.log("Salı ve Haftaiçi")
//         //break;

//     case "3":
//         console.log("Çarşamba ve Haftaiçi")
//         //break;

//     case "4":
//         console.log("Perşembe ve Haftaiçi")
//         //break;

//     case "5":
//         console.log("Cuma ve Haftaiçi")
//         break;

//     case "6":

//         console.log("Cumartesi ve Haftasonu")
//         //break;
//     case "7":

//         console.log("Pazar")
//         break;

//     default:
//         alert("Girilen sayı 1 ile 7 arasında olmalı")
//         break;
// }

//--------------------------------------------------------------
//--------------------------------------------------------------

// 1- Bakiye görüntüleme
// 2- Para Çekme
// 3- Para Yatırma
// 0- Çıkış
// let yeniSatir ="\r\n";
// let bakiye = 1000;
// let metin = "1- Bakiye Görüntüleme"+yeniSatir+
// "2- Para Çekme"+yeniSatir+
// "3- Para Yatırma"+yeniSatir+
// "0- Çıkış"+yeniSatir+
// "Lütfen bir değer giriniz";

// //alert(metin);

// let deger = prompt(metin);
// switch (key) {
//     case "1":
//         alert("Bakiyeniz: "+bakiye)
//         break;
    
//     case "2":
//         let cTutar = Number(prompt("Çekmek istediğiniz miktarı belirtiniz "));
//         if(cTutar<0){
//             bakiye = bakiye-cTutar;
//             alert("Kalan bakiye"+bakiye)
//         }else{
//             alert("Yetersiz Bakiye "+yeniSatir+
//             "Bakiyeniz "+bakiye+" "+"Çekilecek Tutar"+cTutar);
//         }
//         break;
//     case "3":
//         let yTutar = Number(prompt("Yatırılacak Tutarı giriniz"));
//         bakiye = bakiye+yTutar;
//         alert("Güncel bakiyeniz:"+bakiye); 
//         break;
//     case "4";
//         console.log("Çıkış Yapıldı")
//     default:
//         alert("Lütfen geçerli bir değer giriniz (1-2-3-4)")
//         break;
// }

//--------------------------------------------------------------
//--------------------------------------------------------------
/* 
1- Türkçe 40
2- Matematik 40
3- Sosyal Bilimler 20
4- Fen bilimleri 20
100 Puan Ösym'den geliyor
Okul puanı max 60
*/

let trD, trY = 0;
let mtD, mtY = 0;
let sbD, sbY = 0;
let fD , fY = 0;
let puan = 0; 
let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama uygulamasına hoşgeldiniz"+yeniSatir+
    "1-Puan Hesaplama"+yeniSatir+
    "2-Çıkış Yap";
// alert(mesaj);

let secim = prompt(mesaj);
switch (secim) {
    case "1":
        let oPuani = Number(prompt("Okul Puanınızı giriniz"));

        trD = Number(prompt("Türkçe Doğru sayısı:"))
        trY = Number(prompt("Türkçe Yanlış sayısı:"))

        mtD = Number(prompt("Matematik Doğru sayısı:"))
        mtY = Number(prompt("Matematik Yanlış sayısı:"))
        
        sbD = Number(prompt("Sosyal Bilgiler Doğru sayısı:"))
        sbY = Number(prompt("Sosyal Bilgiler Yanlış sayısı:"))
        
        fD = Number(prompt("Fen Bilgisi Doğru sayısı:"))
        fY = Number(prompt("Fen Bilgisi Yanlış sayısı:"))

        let dSayi = trD + mtD + sbD + fD;
        let ySayi = trY + mtY + sbY + fY;
        let kalanDsayi = dSayi - (ySayi/4)
        puan = (kalanDsayi * 4)+100+oPuani;
        alert("TYT puanınız: "+puan)
        break;

    case "2":
        alert("Uygulamadan Çıkış Yapıldı")
        break;
    default:
        break;
}