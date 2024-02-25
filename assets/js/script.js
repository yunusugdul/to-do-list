let ulDom = document.querySelector(".list");
let saveButton = document.querySelector(".save-btn");
let deleteBtn = document.querySelector(".delete-btn");
let clearBtn = document.querySelector(".clear-btn");
let textP = document.querySelector(".list-text");
let listItem = document.querySelector(".list-item");
let todos = [];
saveButton.addEventListener("click", () => {
    
    let todoText = document.querySelector(".to-do-input").value.trim();
// arayüze ekleme
if(todoText === null || todoText === ""){
    alert("Lütfen Bir Değer Giriniz");
}else{
    const li = document.createElement("li");
    li.classList.add("list-item"); 
    li.classList.add("active"); 

    const p = document.createElement("p");
    p.classList.add("list-text"); 

    p.textContent = todoText;

    const button = document.createElement("button");
    button.classList.add("delete-btn"); 
    const i = document.createElement("i");
    i.className = "bi bi-x-lg";

    button.appendChild(i);

    li.append(p, button);
    ulDom.appendChild(li);

    // localstorage ekleme
    function storageAdd(todoText){
        if(localStorage.getItem("todos") === Null){
            todos = []
        }else{
            todos = JSON.parse(localStorage.getItem("todos"));
        }

        todos.push(todoText);
        localStorage.setItem("todos",JSON.stringify(todos))
    }
}
});


