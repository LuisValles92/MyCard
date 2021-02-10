//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = leerUnaCookie("sesion");
if (valor_cookie == "user") {

    document.getElementById("cerrar_sesion").onclick = function() {
        //Insertar datos de LS en IndexedDB?
        eliminarUnaCookie("sesion");
        eliminarClaveValor("datos_json");
        // limpiarLS();
        alert("Sesión cerrada");
        location.href = "../..";
    };

    var u = JSON.parse(obtenerValor("datos_json"));
    // console.log(u);
    $(function() {
        $("#fs_perfil").children().eq(1).attr("src", u.imagen);
        $("#fs_perfil").children().eq(2).text(u.nick);
        $("#fs_perfil").children().eq(3).text(u.nombre);
        $("#fs_perfil").children().eq(4).text(u.pais);
        $("#fs_perfil").children().eq(5).text(u.correo);
    });

} else location.href = "../..";