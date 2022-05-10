// CALCULAR BLOQUE 42
function calculaBloque42(op1) {
    let cadena = "";
    for (let i = 0; i < op1.length; i++) {
        if (i == op1.length - 1) {
            cadena += op1[i]; // si es la última letra añadimos únicamente la letra
        } else {
            cadena += op1[i] + "-"; // si no es la última letra, añadimos también el guión
        }
    }
    return cadena;
}

function muestraCalculo42() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num42").value; // recojo el valor del input
    resultado = calculaBloque42(op1); // hago la operación
    document.getElementById("resultado42").innerHTML = resultado; // muestro el resultado
    cadena = "";
}
