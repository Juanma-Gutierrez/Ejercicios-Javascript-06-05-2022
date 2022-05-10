// CALCULAR BLOQUE 12
function calculaBloque12(num1) {
    if (num1 < 0) {
        return "Introduce una nota válida";
    } else if (num1 < 3) {
        return "Muy deficiente";
    } else if (num1 < 5) {
        return "Insuficiente";
    } else if (num1 < 6) {
        return "Suficiente";
    } else if (num1 < 7) {
        return "Bien";
    } else if (num1 < 9) {
        return "Notable";
    } else if (num1 <= 10) {
        return "Sobresaliente";
    } else {
        return "Introduce una nota válida";
    }
}

function muestraCalculo12() {
    // definimos las variables según número de inputs del bloque
    let num1 = parseInt(document.getElementById("num12").value); // recojo el valor del input
    resultado = calculaBloque12(num1); // hago la operación
    document.getElementById("resultado12").innerHTML = resultado; // muestro el resultado
}
