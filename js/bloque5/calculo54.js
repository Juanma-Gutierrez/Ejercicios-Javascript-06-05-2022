// CALCULAR BLOQUE 54
var cadena = "";
function calculaBloque54(op1) {
    let pc = parseInt(Math.random() * 5);
    let cadena = "";
    const resultados = [
        [
            "Habéis empatado 🤜🏼🤛🏼",
            "Papel envuelve piedra ✋🏽✊🏽<br>Has perdido 👎🏼",
            "Piedra aplasta tijera ✊🏽✌🏽<br>Has ganado 👍🏼",
            "Piedra aplasta lagarto ✊🏽🤏🏽<br>Has ganado 👍🏼",
            "Spock vaporiza piedra 🖖🏽✊🏽<br>Has perdido 👎🏼",
        ],
        [
            "Papel envuelve piedra ✋🏽✊🏽<br>Has ganado 👍🏼",
            "Habéis empatado 🤜🏼🤛🏼",
            "Tijeras corta papel ✌🏽✋🏽<br>Has perdido 👎🏼",
            "Tijeras decapita lagarto ✌🏽🤏🏽<br>Has ganado 👍🏼",
            "Spock rompe tijera 🖖🏽✌🏽<br>Has perdido 👎🏼",
        ],
        [
            "Piedra aplasta tijera ✊🏽✌🏽<br>Has perdido 👎🏼",
            "Tijera corta papel ✌🏽✋🏽<br>Has ganado 👍🏼",
            "Habéis empatado 🤜🏼🤛🏼",
            "Tijera decapita lagarto ✌🏽🤏🏽<br>Has ganado 👍🏼",
            "Spock rompe tijera 🖖🏽✌🏽<br>Has perdido 👎🏼",
        ],
        [
            "Piedra aplasta lagarto ✊🏽🤏🏽<br>Has perdido 👎🏼",
            "Lagarto devora papel 🤏🏽✋🏽<br>Has ganado 👍🏼",
            "Tijera decapita lagarto ✌🏽🤏🏽<br>Has perdido 👎🏼",
            "Habéis empatado 🤜🏼🤛🏼",
            "Lagarto envenena Spock 🤏🏽🖖🏽<br>Has ganado 👍🏼",
        ],
        [
            "Spock vaporiza piedra 🖖🏽✊🏽<br>Has ganado 👍🏼",
            "Papel desautoriza Spock ✋🏽🖖🏽<br>Has perdido 👎🏼",
            "Spock rompe tijera 🖖🏽✌🏽<br>Has ganado 👍🏼",
            "Lagarto envenena Spock 🤏🏽🖖🏽<br>Has perdido 👎🏼",
            "Habéis empatado 🤜🏼🤛🏼",
        ],
    ];

    switch (pc) {
        case 0:
            cadena = "El PC ha escogido PIEDRA ✊🏽<br>";
            break;
        case 1:
            cadena = "El PC ha escogido PAPEL ✋🏽<br>";
            break;
        case 2:
            cadena = "El PC ha escogido TIJERA ✌🏽<br>";
            break;
        case 3:
            cadena = "El PC ha escogido LAGARTO 🤏🏽<br>";
            break;
        case 4:
            cadena = "El PC ha escogido SPOCK 🖖🏽<br>";
            break;
    }

    switch (op1) {
        case "0":
            cadena += "Tú has cogido PIEDRA ✊🏽<br>";
            break;
        case "1":
            cadena += "Tú has cogido PAPEL ✋🏽<br>";
            break;
        case "2":
            cadena += "Tú has cogido TIJERA ✌🏽<br>";
            break;
        case "3":
            cadena += "Tú has cogido LAGARTO 🤏🏽<br>";
            break;
        case "4":
            cadena += "Tú has cogido SPOCK 🖖🏽<br>";
            break;
    }
    cadena += resultados[op1][pc];
    return cadena;
}

function muestraCalculo54() {
    // definimos las variables según número de inputs del bloque
    let op1 = document.getElementById("num54").value; // recojo el valor del input
    resultado = calculaBloque54(op1); // hago la operación
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}

function muestraCalculo54Aleatorio() {
    // definimos las variables según número de inputs del bloque
    let op1 = parseInt(Math.random() * 5); // recojo el valor del input
    op1 = op1.toString(); // lo pasamos a texto
    resultado = calculaBloque54(op1); // hago la operación
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}
