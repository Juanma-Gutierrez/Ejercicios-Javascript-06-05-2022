// CALCULAR BLOQUE 52
function calculaBloque52(op1) {
    let longitud = op1.length;
    let vocal = false;

    const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    for (i = 0; i < longitud; i++) {
        if (vocales.includes(op1[i].toLowerCase())) {
            vocal = true;
            return "La posición de la primera vocal es la " + (i + 1);
        }
    }

    if (!vocal) {
        return "No se ha encontrado ninguna vocal en la cadena";
    }
}

function muestraCalculo52() {
    // definimos las variables según número de inputs del bloque
    let op1;

    op1 = document.getElementById("num52").value; // recojo el valor del input
    resultado = calculaBloque52(op1); // hago la operación
    document.getElementById("resultado52").innerHTML = resultado; // muestro el resultado
}
