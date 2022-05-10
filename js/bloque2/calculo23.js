// CALCULAR BLOQUE 23
function calculaBloque23(op1) {
    var piramide = "";
    if (op1 > 0 && op1 <= 50) {
        for (i = 1; i <= op1; i++) {
            for (j = 1; j <= i; j++) {
                piramide += j;
            }
            piramide += "<br>";
        }
        return piramide;
    } else {
        return "Introduce un número entre 1 y 50.";
    }
}

function muestraCalculo23() {
    // definimos las variables según número de inputs del bloque
    let op1 = parseInt(document.getElementById("num23").value); // recojo el valor del input
    resultado = calculaBloque23(op1); // calculo la secuencia
    document.getElementById("resultado23").innerHTML = resultado; // muestro la secuencia
}
