function establecerUnaCookie(nombre, valor, dias = 0) {
    var cadena = "";
    if (dias > 0) {
        var fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
        var expires = "expires=" + fecha.toUTCString();
        cadena = nombre + "=" + valor + ";" + expires; //DURARERA
    } else cadena = nombre + "=" + valor; //SESIÓN
    document.cookie = cadena;
}

function eliminarUnaCookieConRuta(nombre) {
    document.cookie = nombre + "=; max-age=0;path=/;";
}

function leerUnaCookie(nombre) {
    var resultado = "";
    var busqueda = nombre + "=";
    var listCookies = document.cookie.split(';');
    var par = "";
    for (var i = 0; i < listCookies.length; i++) {
        par = listCookies[i];
        while (par.charAt(0) == ' ') {
            par = par.substring(1);
        }
        if (par.indexOf(busqueda) == 0) {
            resultado = par.substring(busqueda.length, par.length);
        }
    }
    return resultado;
}