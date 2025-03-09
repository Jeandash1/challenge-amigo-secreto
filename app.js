// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTexto(elment, texto){
    let elementoHTML = document.querySelector(elment);
    elementoHTML.innerHTML = texto;
}

function limpiar(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    
    let nuevoAmigo = document.getElementById("amigo").value.trim();
    if(nuevoAmigo != ""){
        amigos.push(nuevoAmigo);
        console.log(amigos)

        let nuevoElement = document.createElement("li");
        //document.getElementById("listaAmigos").innerHTML(amigos);
        nuevoElement.textContent = nuevoAmigo
        document.getElementById("listaAmigos").appendChild(nuevoElement);

        limpiar();
        
    }else{
        alert("Por favor, inserte un nombre.");
    }
}