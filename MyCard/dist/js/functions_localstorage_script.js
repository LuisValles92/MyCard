function establecerClaveValor(c, v) {
    localStorage.setItem(c, v);
}

function eliminarClaveValor(c) {
    localStorage.removeItem(c);
}

function limpiarLS() {
    localStorage.clear();
}

function obtenerValor(c) {
    return localStorage.getItem(c);
}