// CALCULAR BLOQUE 53
function calculaBloque53(op1) {
    // inicializamos las variables
    var num1 = 0;
    var num2 = 1;
    var temp = 0;
    var fibonacci = [];

    // realizamos el bucle para calcular el número fibonacci
    for (i = 1; i < op1; i++) {
        fibonacci.push(num1);
        temp = num2;
        num2 += num1;
        num1 = temp;
    }

    fibonacci=fibonacci.join(", ");
    return fibonacci;
}

function muestraCalculo53() {
    // definimos las variables según número de inputs del bloque
    let op1;

    op1 = document.getElementById("num53").value; // recojo el valor del input
    resultado = calculaBloque53(op1); // hago la operación
    document.getElementById("resultado53").innerHTML = resultado; // muestro el resultado
}
