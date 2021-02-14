function mostrarContenidoInicio() {
    $(function() {
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
        $("#fs_eliminar").show();
    });
}

function mostrarContenidoPerfilySaldo() {
    marcarActivo(this);
    $(function() {
        $("#fs_perfil").show();
        $("#fs_saldo").show();
        $("#fs_eliminar").hide();
    });
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
            establecerSaldoDB(usuario);
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
    });

} else location.href = "../..";