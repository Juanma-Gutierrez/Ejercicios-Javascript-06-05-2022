// CALCULAR BLOQUE 65
function calculaBloque65(op1, op2) {
    for (i = op1.length - 1; i >= 0; i--) {
        cadenaInvertida += op1[i];
    }
    return cadenaInvertida;
}

function muestraCalculo65() {
    // definimos las variables según número de inputs del bloque
    let min = parseInt(document.getElementById("num65Min").value); // recojo el valor del input
    let max = parseInt(document.getElementById("num65Max").value); // recojo el valor del input
    resultado = Math.round(Math.random() * (max - min) + min);
    document.getElementById("resultado65").innerHTML = resultado; // muestro la secuencia
}
