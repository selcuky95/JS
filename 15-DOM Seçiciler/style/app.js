const todo = document.querySelector(".list-group-item");
const todoList = document.querySelector(".list-group")
const clearButton = document.querySelector("#todoClearButton")


console.log(clearButton)
console.log(todoList)
console.log(todo)
todo.style.color ="red"
todo.style.backgroundColor ="white";
todo.style.fontWeight ="bold";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "70pxpx";

todoList.style.marginTop = "60px"
// todolist.style.marginLeft = "100px"
clearButton.style.backgroundColor= "red"
clearButton.style.fontWeight= "bold"
clearButton.style.padding= "10px"

clearButton.style.borderImageSlice = "50% 10%" // butona basınca bastığını anlıyosun ;)
clearButton.style.borderRadius = "50px"
