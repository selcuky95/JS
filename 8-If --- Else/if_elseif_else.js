// let not = 56;
// if(not >50){
//     console.log("Geçtiniz , notunuz:"+not);
// }
// else{
//     console.log("Kaldınız , notunuz:"+not);
// }


// let yas = Number(prompt("Yaşınız:"))
// console.log(typeof yas);
// let para = Number(prompt("Bütçeniz: "))

// if(yas>=18 && para>=3000){
//     alert("Ehliyet sınavına katılabilirsiniz")
// }
// else{
//     alert("Ehliyet sınavına katılamazsınız...")
// }

//------------Ders Ortalaması bulma--------------

// vize1 %30 - vize2 %30 - final %40 , 60
// let firstPoint = Number(prompt("1.vize notunuzu giriniz"));
// let scPoint = Number(prompt("2.vize notunuzu giriniz"));

// let finalPoint = Number(prompt("final notunuzu giriniz"));

// let average = (firstPoint * 0.3)+ (scPoint * 0.3) + (finalPoint * 0.4);
// if(average >=60){
//     alert("Geçtiniz. Tebrikler")
//     console.log(average)
// }else{
//     alert("Kaldınız.Geçmiş olsun. Seneye görüşmek üzere")
//     console.log(average)
// }

//------------------------------------------------
// let chosenPath = prompt("Lütfen gitmek istediğiniz yolu seçiniz: ")
// if(chosenPath== 1){
//     alert("Seçilen yol"+chosenPath+". yoldur");
// }else if(chosenPath==2){
//     alert("Seçilen yol"+chosenPath+". yoldur");
// }else if(chosenPath==3){
//     alert("Seçilen yol"+chosenPath+". yoldur");
// }else{
//     alert("lütfen geçerli bir numara seçiniz.");
// }

// let weight = Number(prompt("Kilonuzu giriniz"));
// let height = Number(prompt("Boyunuzu giriniz"));
// let eyeNo = Number(prompt("Göz numaranızı giriniz"));
// let teeth = Boolean(prompt("Diş düzeniniz nasıl? Küçük harfler ile giriniz."));

// if(weight>69){
//     alert("Kilo fazla");
// }else{
//     confirm("Kilo yeterli!")
// }
// if(height<1.90){
//     alert("Hava Uzmanlığı yeterliliği kategorisine göre değil");
// }else{
//     confirm("Boy uzunluğu yeterli!")
// }
// if(eyeNo>0.00){
//     alert("Hava Uzmanlığı için yeterli değil");
// }else{
//     confirm("Göz numarası yeterli!")
// }
// if(teeth!="beyaz"){
//     alert("Hava Uzmanlığı için yeterli değil")
// }else{
//     confirm("Diş düzeni yeterli!")
// }

let isim = prompt("İsminizi giriniz")
console.log(isim);
let tcKn = prompt("Tc Kimlik numaranızı giriniz")
//let isim2 = "";


kontrolEt2(isim,tcKn);
function kontrolEt(ad, tcKn){
    if(ad!=""){
        if(tcKn.Length!= 11){
            console.log("Tc kimlik Numarası girildi")
        }else{
            console.log("Tc kimlik numarası girilemedi. Kontrol ediniz.")
        }
    }else{
        console.log("Lütfen isim alanını boş bırakmayınız.")
    }
}

function kontrolEt2(ad,tcKn){
    if(ad==""){
        console.log("Lütfen isim alanını boş bırakmayınız.")
        return;
    }
    if(tcKn.Length!=11){
        console.log("Lütfen Tc Kimlik numaranızı 11 haneli giriniz")
        return; // metodu sonlandır
    }
    console.log("Başarıyla Giriş yapıldı")
}
