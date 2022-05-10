// CALCULAR BLOQUE 44
function calculaBloque44(op1) {
    let cadena = "";
    let hayParentesis = false;
    let hayPalabra = false;
    let parentesisEncontrado = false;

    for (let i = 0; i < op1.length; i++) {
        if (op1[i] == "(") { // si empieza paréntesis:
            hayParentesis = true; // hay paréntesis
            hayPalabra = true; // hay palabra
            parentesisEncontrado = true; // inicio de paréntesis
        }

        if (op1[i] == ")" && hayParentesis) { // si hay cierre de paréntesis y hayParentesis
            hayParentesis = false; // ya no hayParentesis
            cadena+=" "  // añadimos separador de palabras
        }

        if (hayParentesis && !parentesisEncontrado) { // si hayParentesis y el carácter no es "("
            cadena += op1[i]; // añadimos el carácter a cadena
        }

        parentesisEncontrado=false; // reiniciamos parentesisEncontrado
    }

    if (!hayPalabra) {  // si no hayPalabra, lo indicamos
        cadena = "No hay ningún paréntesis en la frase";
    }

    return cadena;
}

function muestraCalculo44() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num44").value; // recojo el valor del input
    resultado = calculaBloque44(op1); // hago la operación
    document.getElementById("resultado44").innerHTML = resultado; // muestro el resultado
}
