// CALCULAR BLOQUE 64
function calculaBloque64(op1) {
    let cadenaInvertida = "";
    for (i = op1.length - 1; i >= 0; i--) {
        cadenaInvertida += op1[i];
    }
    return cadenaInvertida;
}

function muestraCalculo64() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num64").value; // recojo el valor del input
    resultado = calculaBloque64(op1); // calculo la secuencia
    document.getElementById("resultado64").innerHTML = resultado; // muestro la secuencia
}
