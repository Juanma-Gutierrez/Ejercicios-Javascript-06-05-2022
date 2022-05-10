// CALCULAR BLOQUE 32
function muestraCalculo32Num() {
    min = parseInt(document.getElementById("num32Min").value);
    max = parseInt(document.getElementById("num32Max").value);
    resultado = calculaAleatorio("numero", min, max);
    console.log(resultado);
    document.getElementById("resultado32").innerHTML =
        "Número aleatorio generado: " + resultado; // muestro el resultado
}

function muestraCalculo32Mayus() {
    resultado = calculaAleatorio("mayus");
    document.getElementById("resultado32").innerHTML =
        "Letra mayúscula generada: " + resultado; // muestro el resultado
}

function muestraCalculo32Letra() {
    resultado = calculaAleatorio("letra");
    document.getElementById("resultado32").innerHTML =
        "Letra mayúscula o minúscula generada: " + resultado; // muestro el resultado
}

function calculaAleatorio(tipo, min, max) {
    switch (tipo) {
        case "numero":
            return parseInt(Math.random() * (max + 1 - min) + min);

        case "mayus":
            min = 65;
            max = 90;
            return String.fromCharCode(
                parseInt(Math.random() * (max + 1 - min) + min)
            );

        case "letra":
            min = 65;
            max = 122;
            let letra = 0;
            while ((letra < 65 || letra > 90) && (letra < 97 || letra > 122)) {
                letra = parseInt(Math.random() * (max + 1 - min) + min);
            }
            console.log(String.fromCharCode(letra),letra);
            return String.fromCharCode(letra);
    }
}
