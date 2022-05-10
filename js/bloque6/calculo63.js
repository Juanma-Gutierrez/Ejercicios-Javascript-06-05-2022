// CALCULAR BLOQUE 63
function calculaBloque63(op1, op2) {
    if (!isNaN(op1)) {
        let iva = parseFloat(op1 * op2).toFixed(2);
        let precioConIva = (parseFloat(op1) + parseFloat(iva)).toFixed(2);
        return (
            "<div class='container'><table><th>Precio inicial</th><th>Tipo IVA</th><th>IVA</th><th>Total</th><tr><td>" +
            op1 +
            " €</td><td>" +
            op2 * 100 +
            "%</td><td>" +
            iva +
            " €</td><td>" +
            precioConIva +
            " €</td></tr></table></div>"
        );
    } else {
        return "Introduce un precio correcto";
    }
}

function muestraCalculo63() {
    // definimos las variables según número de inputs del bloque
    let op1 = parseFloat(document.getElementById("num63Precio").value).toFixed(
        2
    ); // recojo el valor del input
    let op2 = parseFloat(document.getElementById("num63Iva").value).toFixed(2); // recojo el valor del input
    resultado = calculaBloque63(op1, op2); // calculo la secuencia
    document.getElementById("resultado63").innerHTML = resultado; // muestro la secuencia
}
