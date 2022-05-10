window.onload = function () {
    // Mostrar/ocultar bloques ─────────────────────────────────────────────
    ocultaBloques();

    document
        .getElementById("muestraBloque1")
        .addEventListener("click", muestraBloque1);

    document
        .getElementById("muestraBloque2")
        .addEventListener("click", muestraBloque2);

    document
        .getElementById("muestraBloque3")
        .addEventListener("click", muestraBloque3);

    document
        .getElementById("muestraBloque4")
        .addEventListener("click", muestraBloque4);

    document
        .getElementById("muestraBloque5")
        .addEventListener("click", muestraBloque5);

    document
        .getElementById("muestraBloque6")
        .addEventListener("click", muestraBloque6);

    document
        .getElementById("saltador")
        .addEventListener("click", saltador);

    // bloque 1 ────────────────────────────────────────────────────────────

    document
        .getElementById("calcula11")
        .addEventListener("click", muestraCalculo11);

    document
        .getElementById("calcula12")
        .addEventListener("click", muestraCalculo12);

    document
        .getElementById("calcula13")
        .addEventListener("click", muestraCalculo13);
    document
        .getElementById("calcula13Cancelar")
        .addEventListener("click", cancelar13);

    document
        .getElementById("calcula14")
        .addEventListener("click", muestraCalculo14);
    document
        .getElementById("calcula14Cancelar")
        .addEventListener("click", cancelar14);

    document
        .getElementById("calcula15")
        .addEventListener("click", muestraCalculo15);

    // bloque 2 ────────────────────────────────────────────────────────────
    document
        .getElementById("calcula21Izquierda")
        .addEventListener("click", muestraCalculo21Izquierda);
        document
            .getElementById("calcula21Derecha")
            .addEventListener("click", muestraCalculo21Derecha);
    document
        .getElementById("calcula21Centro")
        .addEventListener("click", muestraCalculo21Centro);
    document
        .getElementById("calcula21CentroAscendente")
        .addEventListener("click", muestraCalculo21CentroAscendente);

    document
        .getElementById("calcula22")
        .addEventListener("click", muestraCalculo22);

    document
        .getElementById("calcula23")
        .addEventListener("click", muestraCalculo23);

    document
        .getElementById("calcula24")
        .addEventListener("click", muestraCalculo24);

    // bloque 3 ────────────────────────────────────────────────────────────
    document
        .getElementById("calcula31")
        .addEventListener("click", muestraCalculo31);

    document
        .getElementById("calcula32Num")
        .addEventListener("click", muestraCalculo32Num);
    document
        .getElementById("calcula32Mayus")
        .addEventListener("click", muestraCalculo32Mayus);
    document
        .getElementById("calcula32Letra")
        .addEventListener("click", muestraCalculo32Letra);

    document
        .getElementById("calcula34")
        .addEventListener("click", muestraCalculo34);

    document
        .getElementById("calcula35")
        .addEventListener("click", muestraCalculo35);

    // bloque 4 ────────────────────────────────────────────────────────────
    document
        .getElementById("calcula41")
        .addEventListener("click", muestraCalculo41);

    document
        .getElementById("calcula42")
        .addEventListener("click", muestraCalculo42);

    document
        .getElementById("calcula43")
        .addEventListener("click", muestraCalculo43);

    document
        .getElementById("calcula44")
        .addEventListener("click", muestraCalculo44);

    document
        .getElementById("calcula45")
        .addEventListener("click", muestraCalculo45);

    document
        .getElementById("calcula46")
        .addEventListener("click", muestraCalculo46);

    // bloque 5 ────────────────────────────────────────────────────────────
    document
        .getElementById("calcula51")
        .addEventListener("click", muestraCalculo51);

    document
        .getElementById("calcula52")
        .addEventListener("click", muestraCalculo52);

    document
        .getElementById("calcula53")
        .addEventListener("click", muestraCalculo53);

    document
        .getElementById("calcula54")
        .addEventListener("click", muestraCalculo54);
    document
        .getElementById("calcula54Aleatorio")
        .addEventListener("click", muestraCalculo54Aleatorio);

    // bloque 6 ────────────────────────────────────────────────────────────
    document
        .getElementById("calcula61")
        .addEventListener("click", muestraCalculo61);

    document
        .getElementById("calcula62")
        .addEventListener("click", muestraCalculo62);

    document
        .getElementById("calcula63")
        .addEventListener("click", muestraCalculo63);

    document
        .getElementById("calcula64")
        .addEventListener("click", muestraCalculo64);

    document
        .getElementById("calcula65")
        .addEventListener("click", muestraCalculo65);

    document
        .getElementById("calcula66")
        .addEventListener("click", muestraCalculo66);

};