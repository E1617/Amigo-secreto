function agregarAmigo(){
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