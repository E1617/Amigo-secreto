function agregarAmigo(){
    let nombresAmigos = [];
    let nombre = document.getElementById("amigo");
    if(nombre.text == ""){
        alert("Por favor, inserte un nombre");
    }else{
        nombresAmigos.push(nombre.value);
        nombre.value = "";
    }
}