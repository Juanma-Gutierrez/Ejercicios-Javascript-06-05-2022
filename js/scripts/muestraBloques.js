function ocultaBloques() {
    var bloques = [
        "bloque1",
        "bloque2",
        "bloque3",
        "bloque4",
        "bloque5",
        "bloque6",
    ];
    var bloque = "";
    for (i = 0; i < bloques.length; i++) {
        bloque = document.getElementById(bloques[i]);
        bloque.style.display = "none";
    }
    document.getElementById("saltador").style.display = "none";
}

function saltador() {
    ocultaBloques();
    document.getElementById("saltador").style.display = "none";
}

function muestraBloque1() {
    var bloque = document.getElementById("bloque1");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}
function muestraBloque2() {
    var bloque = document.getElementById("bloque2");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}
function muestraBloque3() {
    var bloque = document.getElementById("bloque3");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}
function muestraBloque4() {
    var bloque = document.getElementById("bloque4");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}

function muestraBloque5() {
    var bloque = document.getElementById("bloque5");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}

function muestraBloque6() {
    var bloque = document.getElementById("bloque6");
    if (bloque.style.display === "none") {
        mostrarMenu(bloque);
    } else {
        ocultarMenu(bloque);
    }
}

function mostrarMenu(bloque) {
    ocultaBloques();
    bloque.style.display = "block";
    window.scrollTo({ top: 0 });
    document.getElementById("saltador").style.display = "block";
}

function ocultarMenu(bloque) {
    ocultaBloques();
    bloque.style.display = "none";
    document.getElementById("saltador").style.display = "none";
}
