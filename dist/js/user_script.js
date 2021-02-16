function mostrarContenidoInicio() {
    $(function() {
        $("#btn_sobres").hide();
        $("#fs_sobres").hide();
        $("#btn_cartas").hide();
        $("#fs_cartas").hide();
        $("#btn_cartas_repetidas").hide();
        $("#fs_cartas_repetidas").hide();
        $("#fs_eliminar").hide();
    });
}

function cerrarSesion() {
    eliminarCookie("sesion");
    limpiarLS();
}

function marcarActivo(element) {
    var htmlcollection_input = document.getElementsByTagName("input");
    for (let i = 0; i < htmlcollection_input.length; i++) {
        if (htmlcollection_input.item(i).isSameNode(element)) {
            htmlcollection_input.item(i).classList.add("bcw-cb");
        } else {
            htmlcollection_input.item(i).classList.remove("bcw-cb");
        }
    }
}

function mostrarContenidoEliminar() {
    marcarActivo(this);
    $(function() {
        $("#fs_perfil").hide();
        $("#fs_saldo").hide();
        $("#btn_sobres").hide();
        $("#fs_sobres").hide();
        $("#btn_cartas").hide();
        $("#fs_cartas").hide();
        $("#btn_cartas_repetidas").hide();
        $("#fs_cartas_repetidas").hide();
        $("#fs_eliminar").show();
    });
}

function mostrarContenidoSobresyCartas() {
    marcarActivo(this);
    $(function() {
        $("#fs_perfil").hide();
        $("#fs_saldo").hide();
        $("#btn_sobres").show();
        $("#fs_sobres").hide();
        $("#btn_cartas").show();
        $("#fs_cartas").hide();
        $("#btn_cartas_repetidas").show();
        $("#fs_cartas_repetidas").hide();
        $("#fs_eliminar").hide();
    });
}

function mostrarContenidoSobres() {
    $(function() {
        $("#fs_sobres").toggle("display");
    });
}

function mostrarContenidoCartas() {
    $(function() {
        $("#fs_cartas").toggle("display");
    });
}

function mostrarContenidoCartasRepetidas() {
    $(function() {
        $("#fs_cartas_repetidas").toggle("display");
    });
}

function mostrarContenidoPerfilySaldo() {
    marcarActivo(this);
    $(function() {
        $("#fs_perfil").show();
        $("#fs_saldo").show();
        $("#btn_sobres").hide();
        $("#fs_sobres").hide();
        $("#btn_cartas").hide();
        $("#fs_cartas").hide();
        $("#btn_cartas_repetidas").hide();
        $("#fs_cartas_repetidas").hide();
        $("#fs_eliminar").hide();
    });
}

function actualizarSaldoEnPantalla() {
    document.getElementById("fs_saldo").children[1].children[0].textContent = usuario.saldo;
}

function mostrarCartas() {
    if (usuario.cartas.length == 0) {
        var elemento_parrafo = document.createElement("p");
        elemento_parrafo.textContent = "El usuario no posee ninguna carta aún.";
        elemento_parrafo.style.marginBottom = "20px";
        $("#fs_cartas").append(elemento_parrafo);
    } else {
        //VACIAR MAZO
        $(".mazo-div").html("");
        //ELIMINAR PARRAFO (SI EXISTE)
        $("#fs_cartas > p").remove();
        $(".mazo-div").css("display", "block");
        usuario.cartas.forEach(x => {
            var elemento_carta = document.createElement("img");
            elemento_carta.setAttribute("src", array_cartas[x].imagen);
            elemento_carta.setAttribute("alt", array_cartas[x].nombre);
            $("#mazo_cartas").append(elemento_carta);
        });
    }
}

function mostrarCartasRepetidas() {
    if (usuario.cartas_repetidas.length == 0) {
        var elemento_parrafo = document.createElement("p");
        elemento_parrafo.textContent = "El usuario no posee ninguna carta repetida aún.";
        elemento_parrafo.style.marginBottom = "20px";
        //PARA QUE NO SE DUPLIQUE EL PÁRRAFO
        $("#fs_cartas_repetidas p").last().remove();
        $("#fs_cartas_repetidas").append(elemento_parrafo);
        $("#descartar_mazo_repetido").hide();
    } else {
        //VACIAR MAZO
        $(".mazo-repetido-div").html("");
        //ELIMINAR PARRAFO (SI EXISTE)
        $("#fs_cartas_repetidas > p").remove();
        //MUESTRO SIEMPRE EL BOTON DE DESCARTAR (POR SI ESTA OCULTO)
        $("#descartar_mazo_repetido").show();
        $(".mazo-repetido-div").css("display", "block");
        usuario.cartas_repetidas.forEach(x => {
            var elemento_carta = document.createElement("img");
            elemento_carta.setAttribute("src", array_cartas[x].imagen);
            elemento_carta.setAttribute("alt", array_cartas[x].nombre);
            $("#mazo_cartas_repetidas").append(elemento_carta);
        });
    }
}

//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "user") {

    mostrarContenidoInicio();

    document.getElementById("cerrar_sesion").onclick = function() {
        cerrarSesion();
        alert("Sesión cerrada");
        location.href = "../..";
    }

    document.getElementById("mostrarEliminar").addEventListener("click", mostrarContenidoEliminar);
    document.getElementById("mostrarSobresyCartas").addEventListener("click", mostrarContenidoSobresyCartas);
    document.getElementById("btn_sobres").addEventListener("click", mostrarContenidoSobres);
    document.getElementById("btn_cartas").addEventListener("click", mostrarContenidoCartas);
    document.getElementById("btn_cartas_repetidas").addEventListener("click", mostrarContenidoCartasRepetidas);
    document.getElementById("mostrarPerfilySaldo").addEventListener("click", mostrarContenidoPerfilySaldo);

    var array_cartas = JSON.parse(obtenerLS("cartas_json"));
    var usuario = JSON.parse(obtenerLS("usuario_json"));

    $(function() {
        //PERFIL
        $("#fs_perfil").children().eq(1).attr("src", usuario.imagen);
        $("#fs_perfil").children().eq(2).text(usuario.nick);
        $("#fs_perfil").children().eq(3).text(usuario.nombre);
        $("#fs_perfil").children().eq(4).text(usuario.pais);
        $("#fs_perfil").children().eq(5).text(usuario.correo);
        //SALDO
        $("#fs_saldo p span").text(usuario.saldo);
        $("#ingresar_saldo").attr("disabled", true);
        $("#rango_saldo").change(function() {
            $("#euro_saldo").text($("#rango_saldo").val() + "€");
            if ($("#euro_saldo").text() == "0€") {
                $("#ingresar_saldo").attr("disabled", true);
                $("#ingresar_saldo").css("backgroundColor", "gray");
            } else {
                $("#ingresar_saldo").attr("disabled", false);
                $("#ingresar_saldo").css("backgroundColor", "black");
            }
        });
        $("#ingresar_saldo").click(function() {
            //Para evitar decimales largos
            usuario.saldo += parseFloat((parseInt($("#rango_saldo").val())).toFixed(1));
            establecerUsuarioDB(usuario);
            actualizarSaldoEnPantalla();
            alert("Saldo ingresado correctamente.");
        });
        //ELIMINAR (DIALOG)
        $("#eliminar_usuario").click(function() {
            document.getElementById("eliminar_dialog").showModal();
        });
        $("#cancelar_dialog").click(function() {
            document.getElementById("eliminar_dialog").close();
        });
        $("#confirmar_dialog").click(function() {
            eliminarUsuarioDB(usuario.uuid);
            cerrarSesion();
        });
        //SOBRES
        $("#comprar_sobre").click(function() {
            var precio, numero_cartas;
            if (document.getElementById("sobre_normal_radio").checked) {
                precio = 2;
                numero_cartas = 3;
            } else {
                precio = 3;
                numero_cartas = 5;
            }
            //Para evitar decimales largos
            var resultado = parseFloat((usuario.saldo - precio).toFixed(1));
            console.log(usuario.saldo + " - " + precio + " = " + resultado);
            $("#resultado_sobre").html("");
            if (precio > usuario.saldo) {
                $(".resultados-div").html("");
                $(".resultados-div").css("display", "none");
                alert("No posee suficiente saldo en su cuenta para comprar este sobre.");
            } else {
                usuario.saldo = resultado;
                actualizarSaldoEnPantalla();
                alert("Sobre adquirido correctamente.");
                //Por índice del array
                var array_resultado_sobre = [];
                for (let i = 0; i < numero_cartas; i++) {
                    do {
                        var numero_aleatorio = Math.floor(Math.random() * (array_cartas.length - 0) + 0);
                    } while (array_resultado_sobre.includes(numero_aleatorio));
                    array_resultado_sobre.push(numero_aleatorio);
                }
                console.log(array_resultado_sobre);
                $(".resultados-div").css("display", "block");
                array_resultado_sobre.forEach(x => {
                    var elemento_carta = document.createElement("img");
                    elemento_carta.setAttribute("src", array_cartas[x].imagen);
                    elemento_carta.setAttribute("alt", array_cartas[x].nombre);
                    $("#resultado_sobre").append(elemento_carta);
                    if (usuario.cartas.includes(x)) {
                        usuario.cartas_repetidas.push(x);
                        //Distintivo de carta repetida
                        elemento_carta.style.borderBottom = "solid yellow";
                    } else usuario.cartas.push(x);
                });
                establecerUsuarioDB(usuario);
                mostrarCartas();
                mostrarCartasRepetidas();
            }
        });
        //CARTAS
        mostrarCartas();
        //CARTAS REPETIDAS
        mostrarCartasRepetidas();
        $("#descartar_mazo_repetido").click(function() {
            var valor_descarte = 0.10;
            var numero_descartes = usuario.cartas_repetidas.length;
            //Para evitar decimales largos
            var resultado = parseFloat((usuario.saldo + (valor_descarte * numero_descartes)).toFixed(1));
            usuario.saldo = resultado;
            usuario.cartas_repetidas = [];
            establecerUsuarioDB(usuario);
            mostrarCartasRepetidas();
            actualizarSaldoEnPantalla();
            $("#mazo_cartas_repetidas").html("");
            $("#mazo_cartas_repetidas").hide();
            alert("Ha descartado " + numero_descartes + " carta/s a " + valor_descarte + "€ cada una, su saldo se ha incrementado.");
        });
    });

} else location.href = "../..";