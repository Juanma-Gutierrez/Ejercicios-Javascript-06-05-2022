// CALCULAR BLOQUE 11
function calculaBloque11(num1) {
    if (num1 < 0 || num1 > 120 || isNaN(num1)) {
        return "Introduce una edad válida";
    } else if (num1 < 18) {
        return "Eres menor de edad, no puedes conducir";
    } else if (num1 < 80) {
        return "Eres mayor de edad, puedes conducir";
    } else if (num1 <= 120) {
        return "Eres muy anciano como para conducir";
    }
}

function muestraCalculo11() {
    // definimos las variables según número de inputs del bloque
    let num1 = parseInt(document.getElementById("num11").value); // recojo el valor del input
    resultado = calculaBloque11(num1); // hago la operación
    document.getElementById("resultado11").innerHTML = resultado; // muestro el resultado
}
