// parametresiz , geriye değer döndürmeyen metod tanımı

// function Yazdir(){
//     debugger;
//     console.log("Selçuk");
// }
// Yazdir();
// debugger;
// Yazdir();

// function Topla(){
//     console.log(5+7);
// }
// Topla();

// //?----------------------------------------------------
// //?----------------------------------------------------
 

// // Parametreli metod tanımlama
// function Yazdir(isim,soyisim){
//     console.log(isim+" "+soyisim);
// }
// Yazdir("Selçuk","Yıldırım");
// Yazdir("Sezer","Yıldırım");



// Cube(5);
// Cube(3);
// Cube(1);
// function Cube(num){
//     console.log(num*num*num)
// }   



// let age = Number(prompt("Please insert your age"))
// control(age);
// function control(age){
//     if (age >= 18) {
//         console.log("You are able to get your driver license")
//     }else{
//         console.log("Sorry, you need to be at least 18 to get your driver license")
//     }
// }


// // ?Return ile geriye değer döndüren metod tanımlamak

// let circulatedResult= cube(3);
// takeSquare(circulatedResult)

// function takeSquare(num2){
//     let result = num2*num2; // circulatedResult * circulatedResult
//     console.log(result) 
// }

// function cube(num2){
//     let result = num2*num2*num2;
//     console.log(result);
//     return result;
// }

// kelime sayısı bulma----------------

// let sentence = "Please write a sentence"
// let ter = prompt("Insert the letter ")
// if(sentence.charAt()===Number){
//     alert("Please insert a letter.")
// }
// let result2 = find(ter)
// alert("Numbers of the letter is: "+result2)
// function find(ter){
//     let total = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if(sentence.charAt(i).toLowerCase()===ter.toLowerCase()){
//             total+=1;
//         }
//     }
//     return total;
// }

// Mükemmel Sayı Bulma






function isPerfNumber(number){
    for(let i = 2; i <=number/2; i++){
        let toplam = 0;
        if(number % i == 0){
            toplam+= i;
        }
    }
    toplam += 1+number;
    if(toplam == number*2){
        console.log("Mükemmel sayı bulundu")
    }else{
        console.log("Sayı mükemmel değil")
    }
}

function FindMax(array){
    let max = array[4];
    for(let i = 0; i< array.length; i++){
        if(array[i]>max){
            max = array[i];
        }
        else{

        }
        return max;
    }
}
console.log(FindMax([1,2,3,4,5]));

function reverseArray(txt){
    for(let i = 0; i < txt.length/2;i++){;
        [txt[i], txt[txt.length-1-i]] = [txt[txt.length-1-i],txt[i]];
    }
    return txt;
}
console.log(reverseArray([1,2,3,4,5]));

// Decimal to Binary Conversion


convertDecimalBinary(24)
function convertDecimalBinary(number){
    let binary ="";
    while (true) {
        binary+= (number%2).toString();
        number = Math.floor(number / 2);
        if(number == 1){
            binary+=1
            break;
        }
    }
    let result = reverse(binary);
    console.log("Sonuç: "+result);
}



function reverse(binary){
    let reverseBinary ="";
    for(let i = binary.length-1; i>=0; i--){
        reverseBinary += binary.charAt(i);
    }
    return reverseBinary;
}


// Binary to Decimal 
let binary2 = "322311"

function convertBinaryDecimal(binary2){
    let toplam = 0;
    let us = 0;
    for(let i = binary2.length-1;i>=0;i--){
        if(Number(binary2.charAt(i))!=0){
            toplam +=Number(binary2.charAt(i)) * Math.pow(2,us);
        }
        
        us++;
    }
    console.log("Sonuç:"+ toplam);
}
convertBinaryDecimal(binary2);


//------String Sınıfının Metodları------

/*
charAt()
concat()
indexOf()
lastindexOf()
toUpperCase()
trim()
slice()
substring()
replace()
split()
valueOf()
startsWith()
endsWith()
*/
let kurs = "Modern Web Geliştirme Kursu"
let index = kurs.charAt()
console.log(index)
let subIndex= "hoşgeldiniz"
let index2 = kurs.concat("'na",subIndex)
console.log(index2)
// PadStart ***
let text = "5";
document.getElementById("demo").innerHTML = text.padStart(4,"x");

// PadEnd
let text2 = "5";
document.getElementById("demo").innerHTML = text.padEnd(4,"x");

// ------------Math Metodları----------- 
let a = 3.99;
let sgo = -4
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

console.log(Math.max(1,2,3,4,44));  // 44
console.log(Math.min(-2,-1,0,1,2)); // -2
console.log(Math.abs(sgo))          // 4

console.log(Math.sqrt(9));          // 3
console.log(Math.pow(5,3));         // 125

console.log(Math.PI);
console.log(Math.floor(random()*1000));





// ----- Date Sınıfı -----

let tarih = new Date(2019,7,15,19,57,55,999)
tarih.toString();
// tarih.get
// console.log(tarih.getFullYear())
// console.log(tarih.getDate()) // Ayın kaçıncı Günü 
// console.log(tarih.getDay())  // Haftanın kaçıncı günü
// console.log(tarih.getHours())
// console.log(tarih.getMinutes())
// console.log(tarih.getSeconds())
// console.log(tarih.getMilliseconds())
// console.log(tarih.getMonth()+1)
// console.log(tarih.toLocaleDateString())  // 00.00.2000
// console.log(tarih.toLocaleTimeString())  // 00:00:00
// console.log(tarih.toLocaleString())      // 00.00.0000 00:00:00  


tarih.setDate(11)
console.log(tarih);

tarih.setHours(3);
console.log(tarih);

tarih.setMonth(11);
console.log(tarih);

tarih.setMinutes(tarih.getMinutes()+2);
console.log(tarih)  
