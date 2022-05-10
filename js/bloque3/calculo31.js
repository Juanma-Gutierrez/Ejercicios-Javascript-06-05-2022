"use strict"
var datos = {};

// CALCULAR BLOQUE 31
function calculaBloque31(nombre, edad) {
    document.getElementById("resultado31").innerHTML = "";
    datos[nombre] = edad;
    for (nombre in datos) {
        document.getElementById("resultado31").innerHTML += `${nombre}: ${datos[nombre]}</br>`
    }
    if (Object.keys(datos).length == 3) { // comprobamos la longitud del objeto
        mostrarMayor();
    }

    // limpiamos los inputs
    document.getElementById("num31Nombre").value="";
    document.getElementById("num31Edad").value="";
}

function muestraCalculo31() {
    let nombre = document.getElementById("num31Nombre").value.toUpperCase(); // recojo el valor del input
    let edad = parseInt(document.getElementById("num31Edad").value); // recojo el valor del input
    calculaBloque31(nombre, edad); // calculo la secuencia

}

function mostrarMayor() {
    let edadMayor = 0;
    let nombreMayor;
    for (let nombre in datos) {
        if (datos[nombre] > edadMayor) {
            nombreMayor = nombre
            edadMayor = datos[nombre];
        }
    }
    document.getElementById("resultado31").innerHTML += "</br>" + nombreMayor + " es el mayor, tiene " + edadMayor + " años.";
}