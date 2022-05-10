// CALCULAR BLOQUE 22
function calculaBloque22(op1) {
    var piramide = "";
    if (isNaN(op1) || op1 < 1) {
        return "Introduce un número válido.";
    } else {
        for (i = op1; i >= 1; i--) {
            for (j = i; j >= 1; j--) {
                piramide += i;
            }
            piramide += "<br>";
        }
        return piramide;
    }
}

function muestraCalculo22() {
    // definimos las variables según número de inputs del bloque
    let op1 = parseInt(document.getElementById("num22").value); // recojo el valor del input
    resultado = calculaBloque22(op1); // calculo la secuencia
    document.getElementById("resultado22").innerHTML = resultado; // muestro la secuencia
}
