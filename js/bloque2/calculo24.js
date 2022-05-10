// CALCULAR BLOQUE 24
function calculaBloque24(op1, op2) {
    var cadena = "";
    if (isNaN(op1) || isNaN(op2)|| op1>op2) {
        return "Introduce números válidos";
    } else {
        for (i = op1; i <= op2; i++) {
            if (i % 4 == 0) {
                cadena += i + " (Múltiplo de 4)<br>";
            } else {
                if (i % 9 == 0) {
                    cadena += i + " (Múltiplo de 9)<br>";
                } else {
                    if (i % 5 == 0) {
                        cadena += i + "<hr>";
                    } else {
                        cadena += i + "<br>";
                    }
                }
            }
        }
        return cadena;
    }
}

function muestraCalculo24() {
    let op1 = parseInt(document.getElementById("num24i").value); // recojo el valor del input
    let op2 = parseInt(document.getElementById("num24f").value); // recojo el valor del input
    resultado = calculaBloque24(op1, op2); // calculo la secuencia
    document.getElementById("resultado24").innerHTML = resultado; // muestro la secuencia
}
