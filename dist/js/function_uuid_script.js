function generarUUID() {
    var uuid = "";
    for (i = 0; i < 32; i++) {
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-";
        }
        uuid += Math.floor(Math.random() * 16).toString(16).toString().toUpperCase();
    }
    return uuid;
}