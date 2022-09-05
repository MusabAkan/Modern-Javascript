
"use strict";

let sonuc;

let gorevListesi = [
    {"id": 1, "gorevAdi": "Görev 1"},
    {"id": 2, "gorevAdi": "Görev 2"},
    {"id": 3, "gorevAdi": "Görev 3"},
    {"id": 4, "gorevAdi": "Görev 4"},
];

let ul = document.getElementById("task-list");

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


// document.querySelector("#btnClear").addEventListener("click", function(event) {
//     console.log("click event: clear");

//     event.preventDefault();
// });


document.querySelector("#btnAddNewTask").addEventListener("click", newTask);

function newTask(event) {
    // console.log(event.target);
    event.target.classList.add("btn-lg");

    event.preventDefault();
}

