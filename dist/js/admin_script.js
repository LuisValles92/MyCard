//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "admin") {
    document.getElementById("cerrar_sesion").onclick = function() {
        eliminarCookie("sesion");
        alert("Sesión cerrada");
        location.href = "../..";
    };

    document.getElementById("crear_bbdd").onclick = function() {
        establecerBBDD_DB();
    };

    document.getElementById("eliminar_bbdd").onclick = function() {
        $(function() {
            $("table").html("");
            $("table").hide();
        });
        eliminarBBDD_DB();
    };

    $(function() {
        $("#listar_cartas").click(function() {
            listarCartas();
        });
        $("#listar_usuarios").click(function() {
            listarUsuarios();
        });
        $("table").hide();
    });
} else location.href = "../..";