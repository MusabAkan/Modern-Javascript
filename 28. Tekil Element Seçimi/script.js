let sonuc;

sonuc = document.getElementById("title");
sonuc = document.getElementById("title").id;
sonuc = document.getElementById("title").className;
sonuc = document.getElementById("title").classList;

 document.getElementById("title").style.fontSize = "30px";
 document.getElementById("title").style.color = "blue";
// document.getElementById("title").style.display = "none";


 document.getElementById("title").innerText = "Todo App";
 document.getElementById("title").innerHTML = "<p>Ahmet Kaya</p>";

sonuc = document.querySelector("#title");
 sonuc = document.querySelector(".card-header");
sonuc = document.querySelector("div");

// sonuc = document.querySelector("li");        
// sonuc = document.querySelector("li:first-child");         
// sonuc = document.querySelector("li:last-child");          
// sonuc = document.querySelector("li:nth-child(2)");          

console.log(sonuc);