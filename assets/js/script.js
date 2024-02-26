let ulDom = document.querySelector(".list");
let saveButton = document.querySelector(".save-btn");
let clearButton = document.querySelector(".clear-btn");

let todos = [];

// Local storage'dan verileri alma
function fetchTodos() {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos !== null) {
        todos = JSON.parse(storedTodos);
        todos.forEach(todoText => {
            addTodoToUI(todoText);
        });
    }
}

// Local storage'a veri ekleme
function addToLocalStorage(todoText) {
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Local storage'dan veri kaldırma
function removeFromLocalStorage(todoText) {
    todos = todos.filter(todo => todo !== todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Arayüze ekleme
function addTodoToUI(todoText) {
    const li = document.createElement("li");
    li.classList.add("list-item");
    
    li.addEventListener("click", function() {
        li.classList.toggle("active");
    });

    const p = document.createElement("p");
    p.classList.add("list-text");
    p.textContent = todoText;

    const button = document.createElement("button");
    button.classList.add("delete-btn");
    const i = document.createElement("i");
    i.className = "bi bi-x-lg";
    button.appendChild(i);

   // Delete butonuna tıklandığında todo'yu sil
button.addEventListener("click", function(e) {
    const todoText = p.textContent; // Silinecek todo metnini al
    li.remove(); // Li elemanını sil
    removeFromLocalStorage(todoText); // Local Storage'dan kaldır
    e.stopPropagation(); // Li elementine tıklanırsa active sınıfını toggle etmeyi engelle
});


    li.append(p, button);
    ulDom.appendChild(li);
}


// Kaydet butonuna tıklama olayı
saveButton.addEventListener("click", () => {
    let todoText = document.querySelector(".to-do-input").value.trim();
    if (todoText === null || todoText === "") {
        alert("Lütfen bir değer giriniz");
    } else {
        addTodoToUI(todoText);
        addToLocalStorage(todoText);
    }
});

// Sayfa yüklendiğinde local storage'dan verileri alma
document.addEventListener("DOMContentLoaded", function () {
    fetchTodos();
});


//localstorage temizleme

    clearButton.addEventListener("click", () => {
        // Arayüzdeki todo öğelerini kaldır
        ulDom.innerHTML = ""; // ulDom'un içeriğini temizle
    
        // localStorage temizle
        localStorage.clear();
    
        // Todos dizisini temizle
        todos = [];
    
     
    });
