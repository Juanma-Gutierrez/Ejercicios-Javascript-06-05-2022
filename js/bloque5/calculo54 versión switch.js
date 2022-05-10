// CALCULAR BLOQUE 54
var cadena = "";
function calculaBloque54(op1) {
    let pc = parseInt(Math.random() * 5);
    let cadena = "";

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
            if (pc == 0) {
                cadena += "Habéis empatado 🤜🏼🤛🏼";
            } else if (pc == 1) {
                cadena += "Papel envuelve piedra ✋🏽✊🏽<br>Has perdido 👎🏼";
            } else if (pc == 2) {
                cadena += "Piedra aplasta tijera ✊🏽✌🏽<br>Has ganado 👍🏼";
            } else if (pc == 3) {
                cadena += "Piedra aplasta lagarto ✊🏽🤏🏽<br>Has ganado 👍🏼";
            } else if (pc == 4) {
                cadena += "Spock vaporiza piedra 🖖🏽✊🏽<br>Has perdido 👎🏼";
            }
            break;
        case "1":
            cadena += "Tú has cogido PAPEL ✋🏽<br>";
            if (pc == 0) {
                cadena += "Papel envuelve piedra ✋🏽✊🏽<br>Has ganado 👍🏼";
            } else if (pc == 1) {
                cadena += "Habéis empatado 🤜🏼🤛🏼";
            } else if (pc == 2) {
                cadena += "Tijeras corta papel ✌🏽✋🏽<br>Has perdido 👎🏼";
            } else if (pc == 3) {
                cadena += "Lagarto devora papel 🤏🏽✋🏽<br>Has perdido 👎🏼";
            } else if (pc == 4) {
                cadena += "Papel desautoriza a Spock✋🏽🖖🏽<br>Has ganado 👍🏼";
            }
            break;
        case "2":
            cadena += "Tú has cogido TIJERA ✌🏽<br>";
            if (pc == 0) {
                cadena += "Piedra aplasta tijera ✊🏽✌🏽<br>Has perdido 👎🏼";
            } else if (pc == 1) {
                cadena += "Tijera corta papel ✌🏽✋🏽<br>Has ganado 👍🏼";
            } else if (pc == 2) {
                cadena += "Habéis empatado 🤜🏼🤛🏼";
            } else if (pc == 3) {
                cadena += "Tijera decapita lagarto ✌🏽🤏🏽<br>Has ganado 👍🏼";
            } else if (pc == 4) {
                cadena += "Spock rompe tijera 🖖🏽✌🏽<br>Has perdido 👎🏼";
            }
            break;
        case "3":
            cadena += "Tú has cogido LAGARTO 🤏🏽<br>";
            if (pc == 0) {
                cadena += "Piedra aplasta lagarto ✊🏽🤏🏽<br>Has perdido 👎🏼";
            } else if (pc == 1) {
                cadena += "Lagarto devora papel 🤏🏽✋🏽<br>Has ganado 👍🏼";
            } else if (pc == 2) {
                cadena += "Tijera decapita lagarto ✌🏽🤏🏽<br>Has perdido 👎🏼";
            } else if (pc == 3) {
                cadena += "Habéis empatado 🤜🏼🤛🏼";
            } else if (pc == 4) {
                cadena += "Lagarto envenena Spock 🤏🏽🖖🏽<br>Has ganado 👍🏼";
            }
            break;
        case "4":
            cadena += "Tú has cogido SPOCK 🖖🏽<br>";
            if (pc == 0) {
                cadena += "Spock vaporiza piedra 🖖🏽✊🏽<br>Has ganado 👍🏼";
            } else if (pc == 1) {
                cadena += "Papel desautoriza Spock ✋🏽🖖🏽<br>Has perdido 👎🏼";
            } else if (pc == 2) {
                cadena += "Spock rompe tijera 🖖🏽✌🏽<br>Has ganado 👍🏼";
            } else if (pc == 3) {
                cadena += "Lagarto envenena Spock 🤏🏽🖖🏽<br>Has perdido 👎🏼";
            } else if (pc == 4) {
                cadena += "Habéis empatado 🤜🏼🤛🏼";
            }
            break;
    }

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
    switch (op1){
        case 0:
            op1="piedra";
            break;
        case 1:
            op1="papel";
            break;
        case 2:
            op1="tijera";
            break;
        case 3:
            op1="lagarto";
            break;
        case 4:
            op1="spock";
            break;
    }
    resultado = calculaBloque54(op1); // hago la operación
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}
