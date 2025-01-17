function agregarAmigo(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let nombresAmigos = [];
    let nombre = document.getElementById("amigo");
    if(nombre.text == ""){
        alert("Por favor, inserte un nombre");
    }else{
        nombresAmigos.push(nombre.value);
        nombre.value = "";
        listaAmigos(nombresAmigos);
    }
}

function listaAmigos(nombresAmigos){
    let lista = document.getElementById("listaAmigos");
    for(let i = 0; i < nombresAmigos.length; i++){
       lista.innerHTML += `<li>${nombresAmigos[i]}</li>`;
    }
}

function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    let listaAmigos = lista.querySelectorAll("li");
    if(listaAmigos.length > 0){
        let resultado = document.getElementById("resultado");
        let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
        lista.innerHTML = "";
        resultado.innerHTML = `<li>${listaAmigos[numeroAleatorio].innerText}</li>`;
    }else{
        alert("No hay amigos para sortear");
    }
}