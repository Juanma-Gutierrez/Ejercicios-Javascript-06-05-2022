// CALCULAR BLOQUE 21
function muestraCalculo21Izquierda() {
    document.getElementById("resultado21").innerHTML = "";
    let op1 = parseInt(document.getElementById("num21").value); // recojo el valor del input
    compruebaNumero(op1, "resultado21");
    for (let i = 0; i < op1; i++) {
        impNveces(i + 1, i + 1);
        impNveces(op1 - i - 1, "*");
        document.getElementById("resultado21").innerHTML += "</br>";
    }
}

// ────────────────────────────────────────────────────────────────────
function muestraCalculo21Derecha() {
    document.getElementById("resultado21").innerHTML = "";
    let op1 = parseInt(document.getElementById("num21").value); // recojo el valor del input
    compruebaNumero(op1, "resultado21");
    for (let i = 0; i < op1; i++) {
        impNveces(op1 - i - 1, "*");
        impNveces(i + 1, i + 1);
        document.getElementById("resultado21").innerHTML += "</br>";
    }
}

// ────────────────────────────────────────────────────────────────────
function muestraCalculo21Centro() {
    document.getElementById("resultado21").innerHTML = "";
    let op1 = parseInt(document.getElementById("num21").value); // recojo el valor del input
    compruebaNumero(op1, "resultado21");
    for (let i = 0; i < op1; i++) {
        impNveces(op1 - i - 1, "*");
        impNveces((i + 1) * 2 - 1, i + 1);
        impNveces(op1 - i - 1, "*");
        document.getElementById("resultado21").innerHTML += "</br>";
    }
}

// ────────────────────────────────────────────────────────────────────
function muestraCalculo21CentroAscendente() {
    document.getElementById("resultado21").innerHTML = "";
    let op1 = parseInt(document.getElementById("num21").value); // recojo el valor del input
    compruebaNumero(op1, "resultado21");
    for (let i = 0; i < op1; i++) {
        impNveces(op1 - i - 1, "*");

        for (let j = 0; j <= i; j++) {
            document.getElementById("resultado21").innerHTML += j + 1;
        }
        for (let j = i; j > 0; j--) {
            document.getElementById("resultado21").innerHTML += j;
        }
        impNveces(op1 - i - 1, "*");
        document.getElementById("resultado21").innerHTML += "</br>";
    }
}

// ────────────────────────────────────────────────────────────────────
function impNveces(n, valor) {
    for (let i = 0; i < n; i++) {
        document.getElementById("resultado21").innerHTML += valor;
    }
}

function compruebaNumero(num, resultado) {
    console.log("comprobar número", num, resultado);

    if (isNaN(num) || num == "") {
        console.log("Número incorrecto", num, resultado);
        document.getElementById(resultado).innerHTML =
            "Debes introducir un número correcto23.";
        return;
    }
}
