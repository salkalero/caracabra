window.onload = inicio

let e;

function inicio(){
    document.querySelector(".burger").onclick = burger;
    e = document.querySelector(".enlaces");
}


function burger(){
    e.classList.toggle("enlaces_mq");
    document.querySelectorAll("nav .enlaces a").forEach((link) => {
        link.classList.toggle("a_mq");
    });   
}


console.log(burger);