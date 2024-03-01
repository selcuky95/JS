// HTML Elementleri Üzerinde Gezinmek.

const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const todoLastChild = document.querySelector(".list-group-item:nth-child(4)");
// const card = document.getElementsByClassName("card")[0];
const card = document.querySelector(".card");

const row = document.querySelector(".row");

let value;

//                             Anneden çocuklara erişmek

value = todoList;
value = todoList.children[0];
value = todoList.children[3];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent = "Değişti";

// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })



//                         Çocuktan Anneye Erişmek

value = todo;
let ul  = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
// let row = cardElement.parentElement;
let container = row.parentElement;


// Kardeşler arasında gezinmek
value = todo;
value = todo.nextElementSibling.nextElementSibling.nextElementSibling;


value = todoLastChild;
value = todoLastChild.previousElementSibling.previousElementSibling
.previousElementSibling.nextElementSibling.previousElementSibling
.previousElementSibling;


value = row.children[0].children[3].children[0].textContent="Todo Listesi Başlığı Değişti";

let todo3 = row.children[0].children[3].children[2].children[2];
todo3.textContent="Todo3 Değişti";
todo3.style.backgroundColor="lightgrey";
todo3.style.color="red";

console.log(value);

const link = document.createElement("a")
link.id ="goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href="http://enesbayram.net";
link.target ="_blank";
link.innerHTML = "Kişisel Websiteme Git"

// Dinamik Olarak element oluşturma

let link = document.createElement("a");
link.id = "goBlockWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "http://enesbayram.net";
link.target = "_blank";
link.innerHTML= "Kişisel Web siteme git"

console.log(link)

cardBody = document.querySelectorAll(".card-body")[1]
const todoList2 = document.querySelector(".list-group");
cardBody.appendChild(link)

{/* <li class="list-group-item d-flex justify-content-between">Todo 3
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>
</li> */}


// <ul class="list-group"></ul>
const todo2 =document.createElement("li");
const todoLink = document.createElement("a")
const i= document.createElement("i")
todo.className = "list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";
todoLink.href = "#";
todoLink.className = "delete-item"

i.ClassName = "fa fa-remove";
todoLink.appendChild(i)
todo2.appendChild(todoLink)

todoList2.appendChild(todo2)

// ELEMENT SİLME İŞLEMİ

const todoList = document.querySelector(".list-group")
const todos = document.querySelectorAll(".list-group-item");
//const todo1 = document.querySelector(".list-group-item")

// todos[0].remove();
// todos[1].remove();
// console.log(todos)
// todos[todos.length-1].remove();

// todo1.remove();

// -------todo list üzerinden silme

// 1. yöntem ==> let todo1 = todos[0] aşağıda da todo1 i sildirebilirsin
todoList.removeChild(todos[todos.length-1])
todoList.removeChild(todoList.lastElementChild);
console.log(todo3);