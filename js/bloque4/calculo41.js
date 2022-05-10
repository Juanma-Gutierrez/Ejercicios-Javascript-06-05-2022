// CALCULAR BLOQUE 41
var cadena = "";
function calculaBloque41(op1) {
    /* let espacios = []; */
    let cadenaOriginal = op1.split(" "); // separamos la cadena en palabras
    for (let i = 0; i < cadenaOriginal.length; i++) {
        // para cada palabra
        for (let j = 0; j < cadenaOriginal[i].length; j++) {
            // seguimos cada letra de la palabra
            if (j % 2 == 0) {
                cadena += cadenaOriginal[i][j].toUpperCase();
            } else {
                cadena += cadenaOriginal[i][j].toLowerCase();
            }
        }
        cadena += " "; // detrás de cada palabra añado espacio
    }
    return cadena;
}

function muestraCalculo41() {
    // definimos las variables según número de inputs del bloque
    let op1;
    op1 = document.getElementById("num41").value; // recojo el valor del input
    resultado = calculaBloque41(op1); // hago la operación
    document.getElementById("resultado41").innerHTML = resultado; // muestro el resultado
    cadena = "";
}
