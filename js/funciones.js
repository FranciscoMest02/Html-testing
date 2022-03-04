function saluda() {
    alert("hola, ¿como estas?");
}

function validaForma() {
    let nombre = document.forms["MiForm"]["nombre"].value;
    let comentario = document.forms["MiForm"]["comentario"].value;
    if(nombre == ""){
        alert("Por favor, ingresa tu nombre");
    } else {
        if (comentario == ""){
            alert("Por favor, ingresa tu comentario");
        } else {
            alert("Gracias por tus comentarios");
        }
    }
}