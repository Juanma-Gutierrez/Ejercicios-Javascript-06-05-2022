// CALCULAR BLOQUE 54
var cadena = "";
function calculaBloque54(op1) {
    let pc = parseInt(Math.random() * 5);
    let cadena = "";

    switch (pc) {
        case 0:
            cadena = "El PC ha escogido PIEDRA βπ½<br>";
            break;
        case 1:
            cadena = "El PC ha escogido PAPEL βπ½<br>";
            break;
        case 2:
            cadena = "El PC ha escogido TIJERA βπ½<br>";
            break;
        case 3:
            cadena = "El PC ha escogido LAGARTO π€π½<br>";
            break;
        case 4:
            cadena = "El PC ha escogido SPOCK ππ½<br>";
            break;
    }

    switch (op1) {
        case "0":
            cadena += "TΓΊ has cogido PIEDRA βπ½<br>";
            if (pc == 0) {
                cadena += "HabΓ©is empatado π€πΌπ€πΌ";
            } else if (pc == 1) {
                cadena += "Papel envuelve piedra βπ½βπ½<br>Has perdido ππΌ";
            } else if (pc == 2) {
                cadena += "Piedra aplasta tijera βπ½βπ½<br>Has ganado ππΌ";
            } else if (pc == 3) {
                cadena += "Piedra aplasta lagarto βπ½π€π½<br>Has ganado ππΌ";
            } else if (pc == 4) {
                cadena += "Spock vaporiza piedra ππ½βπ½<br>Has perdido ππΌ";
            }
            break;
        case "1":
            cadena += "TΓΊ has cogido PAPEL βπ½<br>";
            if (pc == 0) {
                cadena += "Papel envuelve piedra βπ½βπ½<br>Has ganado ππΌ";
            } else if (pc == 1) {
                cadena += "HabΓ©is empatado π€πΌπ€πΌ";
            } else if (pc == 2) {
                cadena += "Tijeras corta papel βπ½βπ½<br>Has perdido ππΌ";
            } else if (pc == 3) {
                cadena += "Lagarto devora papel π€π½βπ½<br>Has perdido ππΌ";
            } else if (pc == 4) {
                cadena += "Papel desautoriza a Spockβπ½ππ½<br>Has ganado ππΌ";
            }
            break;
        case "2":
            cadena += "TΓΊ has cogido TIJERA βπ½<br>";
            if (pc == 0) {
                cadena += "Piedra aplasta tijera βπ½βπ½<br>Has perdido ππΌ";
            } else if (pc == 1) {
                cadena += "Tijera corta papel βπ½βπ½<br>Has ganado ππΌ";
            } else if (pc == 2) {
                cadena += "HabΓ©is empatado π€πΌπ€πΌ";
            } else if (pc == 3) {
                cadena += "Tijera decapita lagarto βπ½π€π½<br>Has ganado ππΌ";
            } else if (pc == 4) {
                cadena += "Spock rompe tijera ππ½βπ½<br>Has perdido ππΌ";
            }
            break;
        case "3":
            cadena += "TΓΊ has cogido LAGARTO π€π½<br>";
            if (pc == 0) {
                cadena += "Piedra aplasta lagarto βπ½π€π½<br>Has perdido ππΌ";
            } else if (pc == 1) {
                cadena += "Lagarto devora papel π€π½βπ½<br>Has ganado ππΌ";
            } else if (pc == 2) {
                cadena += "Tijera decapita lagarto βπ½π€π½<br>Has perdido ππΌ";
            } else if (pc == 3) {
                cadena += "HabΓ©is empatado π€πΌπ€πΌ";
            } else if (pc == 4) {
                cadena += "Lagarto envenena Spock π€π½ππ½<br>Has ganado ππΌ";
            }
            break;
        case "4":
            cadena += "TΓΊ has cogido SPOCK ππ½<br>";
            if (pc == 0) {
                cadena += "Spock vaporiza piedra ππ½βπ½<br>Has ganado ππΌ";
            } else if (pc == 1) {
                cadena += "Papel desautoriza Spock βπ½ππ½<br>Has perdido ππΌ";
            } else if (pc == 2) {
                cadena += "Spock rompe tijera ππ½βπ½<br>Has ganado ππΌ";
            } else if (pc == 3) {
                cadena += "Lagarto envenena Spock π€π½ππ½<br>Has perdido ππΌ";
            } else if (pc == 4) {
                cadena += "HabΓ©is empatado π€πΌπ€πΌ";
            }
            break;
    }

    return cadena;
}

function muestraCalculo54() {
    // definimos las variables segΓΊn nΓΊmero de inputs del bloque
    let op1 = document.getElementById("num54").value; // recojo el valor del input
    resultado = calculaBloque54(op1); // hago la operaciΓ³n
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}

function muestraCalculo54Aleatorio() {
    // definimos las variables segΓΊn nΓΊmero de inputs del bloque
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
    resultado = calculaBloque54(op1); // hago la operaciΓ³n
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}
