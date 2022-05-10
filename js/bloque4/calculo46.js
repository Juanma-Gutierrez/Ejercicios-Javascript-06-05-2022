// CALCULAR BLOQUE 46
function calculaBloque46(op1) {
    let palindromo = true;
    let cadena = op1
        .toLowerCase()
        .replace(/ /g, "")
        .replace(/á/g, "a")
        .replace(/é/g, "e")
        .replace(/í/g, "i")
        .replace(/ó/g, "o")
        .replace(/ú/g, "u")
        .split("");
    console.log(cadena);
    ultimoCaracter = cadena.length - 1;

    for (i = 0; i < cadena.length; i++) {
        if (cadena[i] != cadena[ultimoCaracter]) {
            palindromo = false;
        }
        ultimoCaracter -= 1;
    }

    if (palindromo) {
        return (
            "La frase:<br>" +
            op1 +
            "<br>Es un palíndromo:<br><br>" +
            cadena.join("") +
            "<br>" +
            cadena.join("")
        );
    } else {
        return "La frase:<br>" + op1 + "<br>No es un palíndromo.";
    }
}

function muestraCalculo46() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num46").value; // recojo el valor del input
    resultado = calculaBloque46(op1); // hago la operación
    document.getElementById("resultado46").innerHTML = resultado; // muestro el resultado
}
