// CALCULAR BLOQUE 43
function calculaBloque43(op1) {
    let numVocales = 0;
    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    for (let i = 0; i < op1.length; i++) {
        if (vocales.indexOf(op1[i].toLowerCase())!=-1) { // miramos si la letra es vocal
            numVocales += 1;
        }
    }
    return "En la frase:<br><i>" + op1 + "</i><br>hay " + numVocales + " vocales";
}

function muestraCalculo43() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num43").value; // recojo el valor del input
    resultado = calculaBloque43(op1); // hago la operación
    document.getElementById("resultado43").innerHTML = resultado; // muestro el resultado
}
