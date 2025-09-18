
// Alerta
const botonesComprar = document.getElementsByClassName('btnComprar');
for (let i = 0; i < botonesComprar.length; i++) {
    botonesComprar[i].onclick = alerta;
}
function alerta(){
    alert("¡Primero tienes que registrarte!");
}

// OTRA FORMA DE CAMBIAR TEXTO
/*
const parrafo = document.getElementById('parrafoACambiar');

function cambiarTexto() {
    parrafo.textContent = '¡El texto del párrafo ha cambiado!';
}
document.getElementById('btnCambiarTexto').onclick = cambiarTexto;*/

function cambiarTexto(){
    let texto = document.getElementById("parrafoACambiar");

    texto.innerHTML = '¡El texto del párrafo ha cambiado!';
    texto.style.color = 'red';
    texto.style.fontSize = '20px';
    texto.style.fontWeight = 'bold';
}
document.getElementById('btnCambiarTexto').onclick = cambiarTexto;


// Cambiar de imagen

function cambiarImagen() {
    var imagen = document.getElementById('img');
    if (imagen.src.includes('lenovo2')) {
        imagen.src = 'images/lenovo.jpg';
    } else {
        imagen.src = 'images/lenovo2.jpeg';
    }
}
document.getElementById('img').onclick = cambiarImagen;

// cambiar tod0
function cambiarTodo(){
   cambiarImagen();
   cambiarTexto();
   alerta();
}
document.getElementById('btnCambiarTodo').onclick = cambiarTodo;

//Insertamos un texto

function insertarTexto(){
    document.write("<p>Este es un nuevo párrafo.</p>");
}
document.getElementById('btnAñadirParrafo').onclick = insertarTexto;