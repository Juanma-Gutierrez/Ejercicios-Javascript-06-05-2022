// CALCULAR BLOQUE 13

var cadena = "";
function calculaBloque13(op1) {
    if (cadena.length == 0) {
        cadena = op1;
    } else {
        cadena += "-" + op1;
    }
    document.getElementById("num13").value = "";
    return "Introduce otra palabra";
}

function muestraCalculo13() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num13").value; // recojo el valor del input
    resultado = calculaBloque13(op1); // calculo la secuencia
    document.getElementById("resultado13").innerHTML = resultado; // muestro la secuencia
}

function cancelar13() {
    document.getElementById("num13").value = "";
    document.getElementById("resultado13").innerHTML = "La cadena es: "+cadena; // muestro la secuencia
    cadena = "";
}
