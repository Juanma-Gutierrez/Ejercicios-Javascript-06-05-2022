// CALCULAR BLOQUE 14
var suma = 0;
function calculaBloque14(op1) {
    if (isNaN(op1)) {
        return "Debes introducir un número";
    } else {
        suma += parseInt(op1);
        return "Introduce otro número";
    }
}

function muestraCalculo14() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num14").value.toLowerCase(); // recojo el valor del input
    resultado = calculaBloque14(op1); // calculo la secuencia
    document.getElementById("resultado14").innerHTML = resultado; // muestro la secuencia
    document.getElementById("num14").value = "";
}

function cancelar14() {
    // definimos las variables según número de inputs del bloque
    document.getElementById("resultado14").innerHTML = "La suma es: " + suma; // muestro la secuencia
    document.getElementById("num14").value = "";
    suma = 0;
}
