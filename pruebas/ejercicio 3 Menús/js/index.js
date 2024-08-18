window.onload = inicio

let e;

function inicio(){
    document.querySelector(".box_radial").onclick = burger;
    e = document.querySelector(".lista_menu");
}


function burger(){
    e.classList.toggle("lista_menu_mq");
}



























/*window.onload = inicio;

let enlaces;

function inicio(){
    document.querySelector(".menu_radial").onclick = menuRadial;
    enlaces = document.querySelector(".lista_menu");
}

function menuRadial(){
    enlaces.classList.toggle("lista_menu_mq");
    document.querySelectorAll("enlace").forEach((link)=>{
        link.classList.toggle("lista_menu_mq");
    });
}*/