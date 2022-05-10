// CALCULAR BLOQUE 35
var resultado = "";
var cadena = "";

function muestraCalculo35() {
    qui1 = 0;
    quiX = 0;
    qui2 = 0;
    let prob1 = parseInt(document.getElementById("num351").value);
    let probX = parseInt(document.getElementById("num35X").value);
    let prob2 = parseInt(document.getElementById("num352").value);
    document.getElementById("resultado35").innerHTML = "";
    cadena = "";

    // Control de errores de entrada
    if ((prob1 + probX > 100)||(isNaN(prob1))||(isNaN(probX))||(isNaN(prob2))) {
        document.getElementById("resultado35").innerHTML =
            "Debes introducir porcentajes correctos.";
        return;
    }
    if (prob1 + probX + prob2 != 100) {
        prob2 = 100 - prob1 - probX;
        document.getElementById("num352").value = prob2;
        document.getElementById("resultado35").innerHTML =
            "La suma de las probabilidades tiene que ser 100</br>Se ha ajustado el valor de <em>probabilidad de 2</em> para que cumpla este criterio.</br></br>Pulsa <em>Generar</em> para aceptar estos valores y crear quiniela aleatoria.";
        return;
    }

    for (i = 0; i < 14; i++) {
        resultado = Math.floor(Math.random() * 99) + 1;
        if (resultado <= prob1) {
            resultado = 1;
        } else {
            if (resultado <= prob1 + probX) {
                resultado = "X";
            } else {
                resultado = 2;
            }
        }
        cadena = imprimeQuiniela(i, resultado);
    }
    pieQuiniela()
    document.getElementById("resultado35").innerHTML = cadena; // muestro el resultado
    cadena="";
}
