// selectors (Seçiciler) - Style özellikleri

//! classname , id , tag name

// getElementByID : id'ye göre elementi yakalar

let value;
value = document.getElementById("todoAddButton");
console.log(button.getAttribute("id"));

console.log(button.className);
console.log(button.getAttribute("class"));

const classListesi =button.classList;
classListesi.forEach(function(className){
    console.log(classListesi);
})


let buttonText = button.textContent;
let buttonText2  = button.innerHTML;
console.log(buttonText)

button.textContent = "<b>Todo Ekleyin</b>"; // string content
button.innerHTML = "<b>Todo Ekleyin</b>";
// innerHTML olsaydı puntosuyla birlikte ekrana vercekti

// getelementByClassName

const todoList = document.getElementsByClassName("list-group-item")
const todoList2 = Array.from(document.getElementsByClassName("list-group-item"))
todoList.forEach(function(todo){
    console.log(todo.className);
    console.log(todo.textContent);
})
console.log(todoList);


// getElementByTagName
const forms = document.getElementsByTagName("forms")
// console.log(forms[0].id)
forms.foreach(function(form){
    console.log(forms)
})

const todoList3 = document.getElementsByTagName("li")
console.log(todoList3)

 
// getElementByID -------getelementByClassName --------- getElementByTagName

// querySelector - querySelectorAll

const clearButton = document.querySelector("#todoClearButton");
console.log(clearButton)

const todoList4 = document.querySelector(".list-group")

console.log(todoList4)

const todoList5 = document.querySelectorAll(".list-group") // bir tane değil hepsini seçmek istiyorsak 

const todoList6 = Array.from(document.querySelectorAll("li:nth-child(even)"))

todoList6.foreach(function(todo){
    todo.style.backgroundColor = "lightgrey";
})
console.log(todoList6);
