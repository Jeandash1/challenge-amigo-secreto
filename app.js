// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTexto(getElementById, texto){
    let elementoHTML = document.querySelector(getElementById);
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

function sortearAmigo(){
    let amigoRandom = Math.floor(Math.random() * amigos.length);
    //console.log(`El nombre es ${amigos[amigoRandom]}`);    Validar que se esta escogiendo un nombre al azar 
    
    /*
                ARREGLARLO !ESTA MAL
    let amigoSeleccionado = amigos[amigoRandom]
    document.getElementById("resultudo").textContent = `${amigoSeleccionado}`;
            
    */  
    
}
