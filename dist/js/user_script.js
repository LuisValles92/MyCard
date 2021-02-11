//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "user") {

    function cerrarSesion() {
        eliminarCookie("sesion");
        limpiarLS();
        alert("Sesión cerrada");
        location.href = "../..";
    }

    document.getElementById("cerrar_sesion").onclick = function() {
        cerrarSesion();
    }

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
            //Actualizar saldo de la pagina
        });
        //ELIMINAR
        $("#eliminar_usuario").click(function() {
            eliminarUsuarioDB(usuario.uuid);
            cerrarSesion();
        });
    });

} else location.href = "../..";