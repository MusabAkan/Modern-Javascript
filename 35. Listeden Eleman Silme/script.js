

"use strict";

let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1"},
    {"id": 2, "gorevAdi": "Görev 2"},
    {"id": 7, "gorevAdi": "Görev 3"},
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
                <div class="dropdown">
                    <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a onclick="deleteTask(${gorev.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash-can"></i> Sil</a></li>
                        <li><a class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> Düzenle</a></li>
                    </ul>
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

function deleteTask(id) {

    let deletedId;
    
    for(let index in gorevListesi) {
        if(gorevListesi[index].id == id) {
            deletedId = index;
        }
    }

    // deletedId = gorevListesi.findIndex(function(gorev) {
    //     return gorev.id == id;
    // });

    // arrow function
    // deletedId = gorevListesi.findIndex(gorev => gorev.id == id);

    gorevListesi.splice(deletedId, 1);
    displayTasks();
}


