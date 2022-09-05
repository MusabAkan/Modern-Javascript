
let sonuc;

ul = document.getElementById("task-list");

// // children, firstElementChild, lastElementChild
// // parentElement
// // nextElementSibling, previousElementSibling

sonuc = ul.children;
ul.children[0].children[0].children[0].checked = true; 
// sonuc = ul.firstElementChild;  
// sonuc = ul.lastElementChild;  

// sonuc = document.getElementById("title").parentElement;
// sonuc = document.querySelector(".task").nextElementSibling.nextElementSibling.previousElementSibling;

console.log(sonuc);
