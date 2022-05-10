var listaNombres = [];
var cadena = "";
var mayor = "";
// CALCULAR BLOQUE 31
function calculaBloque31(op1, op2) {
    if (isNaN(op2)) {
        return "Introduce una edad válida";
    } else {
        if (listaNombres.length < 3) {
            listaNombres.push({
                nombre: op1,
                edad: op2
            });
            listaNombres.sort(function (o1, o2) {
                if (o1.edad > o2.edad) {
                    //comparación de edad
                    return 1;
                } else if (o1.edad < o2.edad) {
                    return -1;
                }
                return 0;
            });
            if (listaNombres.length == 3) {
                cadena =
                    "<div class='container'><table><tr><th>Nombre</th><th>Edad</th></tr>";
                // Creamos una tabla nueva
                for (i = listaNombres.length - 1; i >= 0; i--) {
                    cadena +=
                        "<tr><td>" +
                        listaNombres[i].nombre +
                        "</td>" +
                        "<td>" +
                        listaNombres[i].edad +
                        "</td></tr>";
                }
                cadena += "</table></div><br>";
                cadena +=
                    "La persona mayor es " +
                    listaNombres[2].nombre +
                    " ya que tiene " +
                    listaNombres[2].edad +
                    " años";
                return cadena;
            }

            document.getElementById("num31Nombre").value = "";
            document.getElementById("num31Edad").value = "";
            return "Debes introducir a otra persona";
        }
    }
}

function muestraCalculo31() {
    let op1 = document.getElementById("num31Nombre").value.toUpperCase(); // recojo el valor del input
    let op2 = parseInt(document.getElementById("num31Edad").value); // recojo el valor del input
    op1 = op1.toUpperCase();
    resultado = calculaBloque31(op1, op2); // calculo la secuencia
    document.getElementById("resultado31").innerHTML = resultado; // muestro la secuencia
    cadena = "";
}