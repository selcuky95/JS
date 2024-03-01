
// Var ----- Let ----- Const


/*-------------SCOPE KAVRAMI------------

-->            Global Scope
-->            Function Scope
-->            Block Scope

*/

//var degiskenIsmi = 10;
//console.log (degiskenIsmi);

// var a = 5;

// if(true){  
//     console.log(a); // if'in içerisinde constant oldu
// }
// function(){
//     var sayi = 10;
//     console.log(sayi);
// }
// function method1(){
//         ??
//    ?? if(true){
//         ? block scope hepsi
//         console.log(a-1)
//     }
//    ?? while(){
//        ???
//     }
//    ?? for(let i = 0; i < 100; i++){
//    
//     }
//    ?? do {
        
//     } while (condition);
// }
// TODO ORRRRRNEEEGGGG
// export default function(method1){
//     return (
//         <div>
//             <h1>
//                 welcummm to my app!!
//                 <Method1/>
//             </h1>
//         </div>
//     );
// }
function selamVer(){
    var selam = "Bir köy var uzakta."
    if(true){
     /*let*/var b = 10; // ? "if" normalde block scope, fakat
                        // ? var değişkeni belirlendiği için
                        // ? function scope oluyor
        console.log(b); // ?  <<<<=========
    }
    console.log(b); // ? if'in içerisindeki var=> let olursa
                    // ? buradaki console'u if içerisinde
                    // ? yazmak lazım (CONST DA aynı şekilde)
    Console.log(selam)
}
selamVer();
// let / const = block scope özelliği taşır yani üstteki
// örneğe gidelim..

var s = 5;
var s = 12;
console.log(s);

if(true){
    let stop = 4;
    let go = 11; // zaten bir değişken oluşturdun 
                 // mesajını verecek bize, let ile yapıl
                 // dığında
    console.log(a);
}
//!Var tanımlanan herşey function scope içerisindedir--
// let & const arasındaki fark
const a = 10;
a = 11;
console.log(a);

const user = {  // constant olarak belirlediğimiz bu öğeleri
                // dışarıda değiştiremeyiz
    username :"Seco",
    pass:"223"       
}
//user = { age: 28} // ama üstteki const u let yaparsak 
                  // değişim sağlanır
                  // Değişim yapabilmek için :
user.username="secoyldrm"; 

console.log(user);




// ----Veri Tipleri----

//--String--Number--Boolean--Null
//--Undefined--Object--Function


let A = "Sector";
console.log(typeof a) // string  // primitive tip
//-----------------------------
let b = 2
console.log(typeof b) // number  // primitive tip
//-----------------------------
let c = 3;
let s = 5;
console.log(c>s); // boolean     // primitive tip
//-----------------------------
let d = null; // Null            // primitive tip
console.log(d);
//-----------------------------
let e;  // Undefined             // primitive tip
console.log(e);
//-----------------------------
let human = {               // ---- OBJECT TÜRÜNDE            
    // referans tipler olarak geçer
    isim : "Azra", // primitive tiplere göre gelişmişlerdir
    soyİsim : "Soysal",   
    yas : 29 
}
console.log(typeof human); // Object tipinde değer vercek
//-----------------------------
let rakamlar = [1,2,3,4,5]; // Diziler Array
console.log(typeof rakamlar)
//-----------------------------

let func = function(){
    console.log("Merhaba")
}

func();
Console.log(typeof func);

// =='de tip önemsenmeksizin karşılaştırılan
// değerlere bakılır
let ss= 5;
let sss = "5";
console.log(5=="5");

// === hem değerlerin hem de tiplerin eşit 
// olup olmadığına bakar

let s4yi = 4;
//s4yi = s4yi + 2;
s4yi+=2;
console.log(s4yi);