// CALCULAR BLOQUE 66
function calculaBloque66() {
    let cadena = [];
    let cadenaOrdenada = [];
    let aleatorio = 0;
    while (cadena.length < 100) {
        aleatorio = Math.floor(Math.random() * 1000 + 1);
        if (cadena.indexOf(aleatorio) == -1) {
            cadena.push(aleatorio);
        }
    }

    cadenaOrdenada = cadena.sort(comparar).join(", ");
    return cadenaOrdenada;
}

function muestraCalculo66() {
    resultado = calculaBloque66(); // hago la operación
    document.getElementById("resultado66").innerHTML = resultado; // muestro el resultado
}

function comparar(a, b) {
    // con esta función ordena correctamente los números
    return a - b;
}
