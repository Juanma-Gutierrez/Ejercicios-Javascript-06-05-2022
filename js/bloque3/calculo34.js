var resultado = "";
var cadena = "";
var qui1 = 0;
var quiX = 0;
var qui2 = 0;
// CALCULAR BLOQUE 34
function muestraCalculo34() {
    qui1 = 0;
    quiX = 0;
    qui2 = 0;
    for (i = 0; i < 14; i++) {
        resultado = Math.floor(Math.random() * 3) + 1;
        resultado = resultado == 3 ? "X" : resultado;
        cadena = imprimeQuiniela(i, resultado);
    }
    pieQuiniela();
    document.getElementById("resultado34").innerHTML = cadena; // muestro el resultado
    cadena = "";
}

function imprimeQuiniela(i, resultado) {
    /*     console.log(cadena); */
    if (i < 9) {
        cadena += "0";
    }
    cadena +=
        i +
        1 +
        " - " +
        calculaAleatorio("mayus") +
        "-" +
        calculaAleatorio("mayus") +
        ": ";
    switch (resultado) {
        case 1:
            cadena += "[1] [ ] [ ]<br>";
            qui1 += 1;
            break;
        case "X":
            cadena += "[ ] [X] [ ]<br>";
            quiX += 1;
            break;
        case 2:
            cadena += "[ ] [ ] [2]<br>";
            qui2 += 1;
            break;
    }
    return cadena;
}

function pieQuiniela() {
    console.log(qui1, quiX, qui2);
    cadena += "<pre>           </pre>";
    cadena += parseInt((qui1 / 14)*100);
    cadena += "% ";
    cadena += parseInt((quiX / 14)*100);
    cadena += "% ";
    cadena += parseInt((qui2 / 14)*100);
    cadena += "% ";

    return cadena;
}
