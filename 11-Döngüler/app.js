// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for (let i = 0; i <= 10; i+=2) {
//     console.log(i);
// }


// for (let i = 1; i < 10; i++) {
//     if (i % 2 == 1 ) {
//         console.log("Seço");
//     }
//     else {
//         console.log("Yıldırım");
//     }
// }

// let toplam = 0;
// for (let i = 50; i > 0; i--) {
//     toplam += i;
//     console.log(toplam)
// }


//-----------------------------------------


//                                     ===== While ====

//let sayac = 1;
//while (sayac <=10) {            // ? While for'un parçalı düzenli halidir 
                                // ? değişken dışarda, koşul while parantezlerinin içinde, değişken artırma
                                // ? while kod bloğunun içinde yazılır(forda hepsi for parantezindeydi!)
//    console.log(sayac)
//    sayac++;
//}
// let sayac = 0;
// while (sayac<=10) {
//     if (sayac%2==0) {
//         console.log(sayac)
//     }
//     sayac++;
// }

// let sayac =1;
// while (true) {
//     console.log(sayac);
//     if(sayac == 7){
//         break;
//     }
//     sayac++;
// }




//                                     ===== do while =====
// let sayac = 1;
// do {
//     console.log(sayac)
//     sayac++;
// } while (sayac<=10);

// let yas = 23;

// do {
//     console.log("Alırsın") // kodlar en az bir kereye mahsus çalışır (do-while özelliği)
// } while (yas>=25);

// let sayi = 1;
// let toplam = 0;
// do {
//     if (sayi % 3 == 0) {
//         toplam += sayi;
//         console.log(sayi);
//     }
//     sayi++;
// } while (sayi < 20);
// console.log("Toplam:",toplam);


// =============                    BREAK CONTINUE              ===================
let sayi = 0;

while (sayi<10){
    console.log(sayi);
    if (sayi == 5){
        break;        //? Döngüyü kırar
    }
    sayi++;
} 
let sayi2 = 0;

while (sayi2 <= 10) {
    sayi2++;    
    if (sayi2 == 1) {
        continue;   //? Continue döngüyü bir kere kırar sonra kaldığı yerden devam eder
                    // ? (1 i yazmicak 2den devam)
    } 
    console.log(sayi2);
}

// Çarpım Tablosu

for (let i = 1; i < 10; i++) {
     for(let j = 1; j< 10; j++){
        console.log(i+"x"+j+"="+(i*j));
     }   
}

//---------Asal Sayı bulma

let aSayisi = Number(prompt("Bir sayı giriniz"));
let sonuc = true;
for(let i = 2; i<=Math.floor(sayi/2);i++){
    if(aSayisi % i == 0){
        sonuc = false;
        break;
    }
}
if(sonuc){
    alert(sayi+" asaldır.")
}else{
    alert(sayi + "asal değildir")
}

// --- Faktöriyel Hesaplama
let num = Number(prompt("Bir sayı giriniz"));
let carpim = 1;
for(let i = 1; i < sayi; i++){
    carpim = carpim * i;
}
alert("Sonuç: "+ carpim)


//---- Armstrong Sayısı ----

let num2 = prompt("Bir sayı giriniz");
let toplam = 0;

for (let i = 0; i < num2.length; i++){
    let rakam = num2.charAt(i)
    toplam += rakam*rakam*rakam;
}
if(Number(num2)==toplam){
    alert("Sayı AS sayısıdır")
}else{
    alert("AS sayısı değildir")
}