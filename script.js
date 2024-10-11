import {barcelona,roma, paris, londres} from './ciudades.js'

//obtener los elementos del doom
let enlaces= document.querySelectorAll('a')
let tituloElemento= document.getElementById('titulo')
let subTituloElemento= document.getElementById('subtitulo')
let parrafoElemento= document.getElementById('parrafo')

// Agregando evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        // Remover 'active' de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar 'active' al enlace actual
        this.classList.add('active');

        // Obtener el contenido basado en el texto del enlace
        let contenido = obtenerContenido(this.textContent);

        // Actualizar los elementos del DOM con el nuevo contenido
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});



//funcion para traer la info correcta desde ciudades js
function obtenerContenido(enlace){
    let contenido ={
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
