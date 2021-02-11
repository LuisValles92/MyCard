function obtenerLS(c) {
    return localStorage.getItem(c);
}

function establecerLS(c, v) {
    localStorage.setItem(c, v);
}

function eliminarLS(c) {
    localStorage.removeItem(c);
}

function limpiarLS() {
    localStorage.clear();
}