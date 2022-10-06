/*
Nun erstellen wir uns mit der Methode .innerHTML einen <figure> tag für unsere Galerie. 
Nutze den HTML-Code aus dem Kommentarbereich.




       Fig1        Fig2          Fig3

*/



let section = document.getElementById("gallery")
console.log(section);


section.innerHTML = "<figure> <img src=https://images.unsplash.com/photo-1664028854712-374f70773527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80</figure><figcaption> Fig.1</figcaption>";
section.style.width = "200px";
section.style.height = "200px";

section.innerHTML += "<figure> <img src=https://images.unsplash.com/photo-1664028854712-374f70773527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80></figure><figcaption> Fig.2</figcaption>";

section.innerHTML += "<figure> <img src=https://images.unsplash.com/photo-1664028854712-374f70773527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80</figure><figcaption> Fig.3</figcaption>";


// section.style.height: "200px";

// section.style.width: "200px";







