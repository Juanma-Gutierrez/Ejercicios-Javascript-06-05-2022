// CALCULAR BLOQUE 54
var cadena = "";
function calculaBloque54(op1) {
    let pc = parseInt(Math.random() * 5);
    let cadena = "";
    const resultados = [
        [
            "HabΓ©is empatado π€πΌπ€πΌ",
            "Papel envuelve piedra βπ½βπ½<br>Has perdido ππΌ",
            "Piedra aplasta tijera βπ½βπ½<br>Has ganado ππΌ",
            "Piedra aplasta lagarto βπ½π€π½<br>Has ganado ππΌ",
            "Spock vaporiza piedra ππ½βπ½<br>Has perdido ππΌ",
        ],
        [
            "Papel envuelve piedra βπ½βπ½<br>Has ganado ππΌ",
            "HabΓ©is empatado π€πΌπ€πΌ",
            "Tijeras corta papel βπ½βπ½<br>Has perdido ππΌ",
            "Tijeras decapita lagarto βπ½π€π½<br>Has ganado ππΌ",
            "Spock rompe tijera ππ½βπ½<br>Has perdido ππΌ",
        ],
        [
            "Piedra aplasta tijera βπ½βπ½<br>Has perdido ππΌ",
            "Tijera corta papel βπ½βπ½<br>Has ganado ππΌ",
            "HabΓ©is empatado π€πΌπ€πΌ",
            "Tijera decapita lagarto βπ½π€π½<br>Has ganado ππΌ",
            "Spock rompe tijera ππ½βπ½<br>Has perdido ππΌ",
        ],
        [
            "Piedra aplasta lagarto βπ½π€π½<br>Has perdido ππΌ",
            "Lagarto devora papel π€π½βπ½<br>Has ganado ππΌ",
            "Tijera decapita lagarto βπ½π€π½<br>Has perdido ππΌ",
            "HabΓ©is empatado π€πΌπ€πΌ",
            "Lagarto envenena Spock π€π½ππ½<br>Has ganado ππΌ",
        ],
        [
            "Spock vaporiza piedra ππ½βπ½<br>Has ganado ππΌ",
            "Papel desautoriza Spock βπ½ππ½<br>Has perdido ππΌ",
            "Spock rompe tijera ππ½βπ½<br>Has ganado ππΌ",
            "Lagarto envenena Spock π€π½ππ½<br>Has perdido ππΌ",
            "HabΓ©is empatado π€πΌπ€πΌ",
        ],
    ];

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
            break;
        case "1":
            cadena += "TΓΊ has cogido PAPEL βπ½<br>";
            break;
        case "2":
            cadena += "TΓΊ has cogido TIJERA βπ½<br>";
            break;
        case "3":
            cadena += "TΓΊ has cogido LAGARTO π€π½<br>";
            break;
        case "4":
            cadena += "TΓΊ has cogido SPOCK ππ½<br>";
            break;
    }
    cadena += resultados[op1][pc];
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
    op1 = op1.toString(); // lo pasamos a texto
    resultado = calculaBloque54(op1); // hago la operaciΓ³n
    document.getElementById("resultado54").innerHTML = resultado; // muestro el resultado
}
