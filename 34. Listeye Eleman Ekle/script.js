

"use strict";

let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1"},
    {"id": 2, "gorevAdi": "Görev 2"},
    {"id": 3, "gorevAdi": "Görev 3"},
    {"id": 4, "gorevAdi": "Görev 4"},
];

displayTasks();

function displayTasks() {
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    for(let gorev of gorevListesi) {

        let li = `
            <li class="task list-group-item">
                <div class="form-check">
                    <input type="checkbox" id="${gorev.id}" class="form-check-input">
                    <label for="${gorev.id}" class="form-check-label">${gorev.gorevAdi}</label>
                </div>
            </li>
        `;
        
        ul.insertAdjacentHTML("beforeend", li);           

    }
}

document.querySelector("#btnAddNewTask").addEventListener("click", newTask);
document.querySelector("#btnAddNewTask").addEventListener("keypress", function(){
    if (event.key == "Enter") {
        document.getElementById("btnAddNewTask").click();
    }
});

function newTask(event) {
    
    let taskInput = document.querySelector("#txtTaskName");

    if(taskInput.value == "") {
        alert("görev girmelisiniz");
    } else {
        gorevListesi.push({"id": gorevListesi.length + 1, "gorevAdi": taskInput.value});
        taskInput.value = "";
        displayTasks();
    }

    event.preventDefault();
}       

