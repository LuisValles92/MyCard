//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "user") {

    document.getElementById("cerrar_sesion").onclick = function() {
        eliminarCookie("sesion");
        limpiarLS();
        alert("Sesión cerrada");
        location.href = "../..";
    };

    var array_cartas = JSON.parse(obtenerLS("cartas_json"));
    var usuario = JSON.parse(obtenerLS("usuario_json"));
    $(function() {
        $("#fs_perfil").children().eq(1).attr("src", usuario.imagen);
        $("#fs_perfil").children().eq(2).text(usuario.nick);
        $("#fs_perfil").children().eq(3).text(usuario.nombre);
        $("#fs_perfil").children().eq(4).text(usuario.pais);
        $("#fs_perfil").children().eq(5).text(usuario.correo);
    });

} else location.href = "../..";