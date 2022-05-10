// CALCULAR BLOQUE 45
function calculaBloque45(op1) {
    let cadenaInvertida = "";
    for (i = op1.length-1; i >= 0; i--) {
        cadenaInvertida += op1[i];
    }
    return cadenaInvertida;
}

function muestraCalculo45() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num45").value; // recojo el valor del input
    resultado = calculaBloque45(op1); // hago la operación
    document.getElementById("resultado45").innerHTML = resultado; // muestro el resultado
}
