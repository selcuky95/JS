let dizi = [];
let dizi2 = new Array();

dizi[0] = ["Rengar","Garen"];

dizi.forEach(function(isim){
    console.log(isim);
});

// Array Methods(dizi metodları)

/*
push     :  dizinin sonuna eleman ekler. Ayrıca dizinin uzunluğunu döner
unshift  :  dizinin başına eleman ekler. Eleman sayısını geri döndürür

pop      :  dizinin sonundan eleman siler. Eleman sayısını döndürür
shift    :  dizinin başından eleman siler. Eleman sayısını döndürür

splice(index,i)  :  eleman eklemek ya da silmek için kullanılır
toString :  diziyi stringe çevirir
join     :  diziyi stringe çevirir. farkı ise eleman ekleyebiliriz

concat   :  dizileri birleştirmek için kullanılır
slice    :  diziyi istenilen yerde bölüp yeni bir dizi oluşturmak için kullanılır
length   :  dizinin uzunluğunu verir
reverse  :  dizinin elemanlarını tersine çevirir
split    :  belirli bir ifadeye göre bölüp diziye çevirmek,
indexOf  :  elemanın index numarasını verir
includes :  verilen elemanı içeriyor mu ona bakar
*/

let cars = ["BMW","Toyota", "Renault", "Mercedes","Porsche"];
console.log(cars.length);
let cars2 = ["Maserati", "Lotus", "Wolvo"]

// // PUSH METODU
// cars.push("Opel");
// console.log(cars)

// // UNSHİFT METODU
// cars.unshift("Hyundai");
// console.log(cars)

// // POP Metodu
// let deletedI= cars.pop();
// console.log(deletedI);

// // SHIFT METODU 
// let deleted = cars.shift()
// console.log(cars);
// console.log(deleted);

//SPLICE METODU
console.log(cars)
cars.splice(1,2,"Hyundai");
console.log(cars)

//STRING METODU
let stringOfCars = cars.toString();
console.log(typeof cars)

// JOIN METOD
let carsJoin= cars.join("-");
console.log(carsJoin);

// CONCAT METODU
let unity = cars.concat(cars2);
console.log(unity);

// SLICE METODU
let diffArray= cars.slice(2);
console.log(diffArray);

// SPLIT METODU

let isimler = "karbonat,şerbet,tuz";
let isimlerDizi = isimler.split(",");
console.log(isimlerDizi)

// INCLUDES METODU
let sonuc = cars.includes("wolvo");
console.log(sonuc);
