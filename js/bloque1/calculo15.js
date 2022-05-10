// CALCULAR BLOQUE 15
var letra = "";
const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
];

function calculaBloque15(op1) {
    if (isNaN(op1)) {
        return "Debes introducir un número";
    } else if (op1 < 0 || op1 > 99999999) {
        return "El número debe estar entre 0 y 99.999.999";
    } else if (op1 >= 0 || op1 <= 99999999){
        letra = letras[op1 % 23];
        return "La letra del DNI " + op1 + " es " + letra;
    }
}

function muestraCalculo15() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num15").value; // recojo el valor del input
    resultado = calculaBloque15(op1); // calculo la secuencia
    document.getElementById("resultado15").innerHTML = resultado; // muestro la secuencia
}
