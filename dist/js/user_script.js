function mostrarContenidoInicio() {
    $(function() {
        $("#btn_sobres").hide();
        $("#fs_sobres").hide();
        $("#btn_cartas").hide();
        $("#fs_cartas").hide();
        $("#fs_eliminar").hide();
    });
}

function cerrarSesion() {
    eliminarCookie("sesion");
    limpiarLS();
    location.href = "../..";
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

function mostrarContenidoPerfilySaldo() {
    marcarActivo(this);
    $(function() {
        $("#fs_perfil").show();
        $("#fs_saldo").show();
        $("#btn_sobres").hide();
        $("#fs_sobres").hide();
        $("#btn_cartas").hide();
        $("#fs_cartas").hide();
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

//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "user") {

    mostrarContenidoInicio();

    document.getElementById("cerrar_sesion").onclick = function() {
        cerrarSesion();
        alert("Sesión cerrada");
    }

    document.getElementById("mostrarEliminar").addEventListener("click", mostrarContenidoEliminar);
    document.getElementById("mostrarSobresyCartas").addEventListener("click", mostrarContenidoSobresyCartas);
    document.getElementById("btn_sobres").addEventListener("click", mostrarContenidoSobres);
    document.getElementById("btn_cartas").addEventListener("click", mostrarContenidoCartas);
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
            usuario.saldo += parseFloat($("#rango_saldo").val());
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
            console.log(usuario.saldo + " - " + precio + " = " + (usuario.saldo - precio));
            $("#resultado_sobre").html("");
            if (precio > usuario.saldo) {
                alert("No posee suficiente saldo en su cuenta para comprar este sobre.");
            } else {
                usuario.saldo -= precio;
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
            }
        });
        //CARTAS
        mostrarCartas();
    });

} else location.href = "../..";