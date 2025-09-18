function cambiarDatos(){
    let nombre = document.getElementById("nombre-usuario");
    let descripcion = document.getElementById("descripcion-usuario");

    if (nombre.innerHTML.includes('Alba')) {
        nombre.innerHTML = 'Jose Sanchez Gil';
    } else {
        nombre.innerHTML = 'Alba Rumeu Montesinos';
    }

    if (descripcion.innerHTML.includes('Sagunto')) {
        descripcion.innerHTML = 'Tengo 19 años, vivo en almenara, estudio 2ºDAW';
    } else {
        descripcion.innerHTML = 'Tengo 23 años, vivo en Sagunto, estudio marketing';
    }

    console.log("Datos del perfil actualizados");
}
document.getElementById('btnCambiarDatos').onclick = cambiarDatos;


function cambiarImagen(){
    let imagen = document.getElementById('foto-perfil');
    if (imagen.src.includes('img')) {
        imagen.src = 'images/chico.png';


    } else {
        imagen.src = 'images/img_1.png';

    }
    console.log(imagen.getAttribute('src'));
}
document.getElementById('btnCambiarImagen').onclick = cambiarImagen;


function cambiarTema(){
    let tema = document.getElementById("tarjeta-perfil");
    let nombre = document.getElementById("nombre-usuario");

    if (tema.style.backgroundColor.includes('cadetblue')) {
        tema.style.backgroundColor = 'bisque';
    } else {
        tema.style.backgroundColor = 'cadetblue';
    }
    alert("El tema va a cambiar");
}
document.getElementById('btnCambiarTema').onclick = cambiarTema;

function cambiarTodo(){
    cambiarDatos();
    cambiarImagen();
    cambiarTema();
}
document.getElementById('btnCambiarTodo').onclick = cambiarTodo;
