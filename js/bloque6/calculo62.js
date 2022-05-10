// CALCULAR BLOQUE 62

var letra62 = "";
function calculaBloque62(op1) {
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

    let numeroLetras = 0;

    for (i = 0; i < op1.length; i++) {
        if (isNaN(op1[i])) {
            numeroLetras += 1; // contamos el número de letras del dni introducido
        }
    }

    if (numeroLetras > 1) {
        return (
            "El DNI es incorrecto, tiene " +
            numeroLetras +
            " letras.<br>Debes introducir un número de DNI válido."
        );
    }

    // si no tiene letra, la mostramos
    if (numeroLetras == 0) {
        letra62 = letras[op1 % 23];
        return (
            "Al DNI " +
            op1 +
            " le corresponde la letra " +
            letra62
        );
    } else if (letra62 == op1.slice(-1)) {
        return "El DNI " + op1 + " es correcto.";
    }
    return ("Debe introducir un DNI válido.")
}

function muestraCalculo62() {
    // definimos las variables según número de inputs del bloque
    let op1;
    op1 = document.getElementById("num62").value.toUpperCase(); // recojo el valor del input
    resultado = calculaBloque62(op1); // calculo la secuencia
    document.getElementById("resultado62").innerHTML = resultado; // muestro la secuencia
}
