// html elementleri üzerinde gezinme
const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group");
const card = document.querySelector(".card");

console.log(todo);
console.log(card);

let value;


// parent => child


value = todoList;
value = todoList.children//ya da children[0];
value = todoList.children[todoList.children.length-1];
value = todoList.children[3].textContent="Değişti";

value = Array.from(todoList.children);
value.forEach(function(todo){
    console.log(todo.textContent);
})


// child => parent


value = todo;
value = todo.parentElement.parentElement.parentElement; 
// ya da açıklayıcı olması için değişken ismini value yerine 
// almak istediğimiz parent'ın ismini koyabiliriz
// ? her bir değişkene bulmak istediğimiz parent'ın adı takıyoruz

let ul = todo.parentElement;
let cardBody = ul.parentElement;
let cardElement = cardBody.parentElement;
let row = cardElement.parentElement;
let container = row.parentElement;
console.log(cardBody) 

// Sibling => Sibling

value = todo;
value = todo.nextElementSibling;


const todoLastChild = document.querySelector(".List-group-item:nth-child(4)");

value = todoLastChild.previousElementSibling;
console.log(todoLastChild)  

value.buttonClick(function(todo){
    console.log("Todo Listesi Değişti")
    value = document.row.children[0].children[3].children[0].textContent="Todo Listesi Değişti"
    value = document.row.children[0].children[3].children[0].innerHTML.textContent.BackgroundColor="Red"
    value = document.row.children[0].children[3].children[0].innerHTML.textContent.FontWeight="Bold"
})

// Bard'a göre okunaklılık açısından ;
// ?? document.querySelector(".todo-item").textContent="Todo Listesi Değişti"
// ?? document.querySelector(".todo-item").style.backgroundColor="Red"
// ?? document.querySelector(".todo-item").style.fontWeight="Bold 
// şeklinde function içerisine alabiliriz

value = row.children[0].children[3].children[2].children[2];
todo.textContent="Todo Listesi Değişti"
todo.style.BackgroundColor="lightgrey"
todo.style.color="red"
