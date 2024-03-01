
const cardBody = document.querySelectorAll(".card-body");
// <h5 class="card-title">Todo Listesi</h5>
const newTitle = document.createElement("h2");
newTitle.className ="card-title";
newTitle.tagName ="Todo Listesi-YENİ";

console.log(cardBody.childNodes[1])
//cardBody.replaceChild(newTitle,)