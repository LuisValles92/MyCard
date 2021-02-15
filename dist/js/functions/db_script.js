function establecerBBDD_DB() {
    if (window.indexedDB) {
        var peticion = window.indexedDB.open("mycard", 1);
        var bd;

        peticion.onupgradeneeded = function(evento) {
            bd = peticion.result;

            var almacenCartas = bd.createObjectStore("cartas", {
                keyPath: "id",
                autoIncrement: true,
            });
            var almacenUsuarios = bd.createObjectStore("usuarios", {
                keyPath: "uuid",
            });

            almacenCartas.createIndex("por_nombre", "nombre");
            almacenUsuarios.createIndex("por_correo", "correo", {
                unique: true,
            });
            almacenUsuarios.createIndex("por_nick", "nick", {
                unique: true,
            });
            almacenUsuarios.createIndex("por_nombre", "nombre");
            almacenUsuarios.createIndex("por_pais", "pais");
            almacenUsuarios.createIndex("por_sexo", "sexo");
            almacenUsuarios.createIndex("por_saldo", "saldo");
        };

        peticion.onsuccess = function(evento) {
            bd = peticion.result;
            var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
            var almacenCartas = transaccion.objectStore("cartas");
            var almacenUsuarios = transaccion.objectStore("usuarios");

            almacenCartas.add({
                nombre: "Adam Cole",
                imagen: "../../images/cards/1.png"
            });
            almacenCartas.add({
                nombre: "Adam Cole - Last Shot",
                imagen: "../../images/cards/2.png"
            });
            almacenCartas.add({
                nombre: "AJ Styles",
                imagen: "../../images/cards/3.png"
            });
            almacenCartas.add({
                nombre: "Akam",
                imagen: "../../images/cards/4.png"
            });
            almacenCartas.add({
                nombre: "Aleister Black",
                imagen: "../../images/cards/5.png"
            });
            almacenCartas.add({
                nombre: "Alexa Bliss",
                imagen: "../../images/cards/6.png"
            });
            almacenCartas.add({
                nombre: "Alexa Bliss - Twisted Bliss 1",
                imagen: "../../images/cards/7.png"
            });
            almacenCartas.add({
                nombre: "Alexa Bliss - Twisted Bliss 2",
                imagen: "../../images/cards/8.png"
            });
            almacenCartas.add({
                nombre: "Andre The Giant",
                imagen: "../../images/cards/9.png"
            });
            almacenCartas.add({
                nombre: "Asuka",
                imagen: "../../images/cards/10.png"
            });

            almacenUsuarios.add({
                uuid: generarUUID(),
                correo: "antonio@hotmail.com",
                password: "FabiolA66",
                nick: "Antonio8783",
                nombre: "Antonio",
                pais: "Marruecos",
                sexo: "H",
                imagen: "../../images/avatars/man/M2.png",
                saldo: 0,
                cartas: [],
                cartas_repetidas: []
            });
            almacenUsuarios.add({
                uuid: generarUUID(),
                correo: "carmen@hotmail.com",
                password: "BarriofloreS55",
                nick: "Doña_Carmencita",
                nombre: "Carmen",
                pais: "Canadá",
                sexo: "M",
                imagen: "../../images/avatars/woman/W4.png",
                saldo: 0,
                cartas: [],
                cartas_repetidas: []
            });
            almacenUsuarios.add({
                uuid: generarUUID(),
                correo: "luisvalles92@hotmail.com",
                password: "OrtoN11",
                nick: "LuisValles92",
                nombre: "Luis Valles",
                pais: "España",
                sexo: "H",
                imagen: "../../images/avatars/man/M3.png",
                saldo: 0,
                cartas: [],
                cartas_repetidas: []
            });

            bd.close();
            alert("BBDD creada correctamente.");
        };

        peticion.onerror = function(evento) {
            alert("EVENTO: error\nNo se ha abierto la BBDD\nSe produce al intentar abrir la BBDD con una versión anterior a la existente.");
        };

        peticion.onblocked = function(evento) {
            alert("EVENTO: blocked\nBBDD bloqueada\nSe produce al intentar abrir la BBDD con una nueva versión y esta no fue antes cerrada.");
        };
    } else alert("Su navegador no soporta IndexedDB.");
}

function establecerUsuarioDB(usuario) {
    establecerLS("usuario_json", JSON.stringify(usuario));
    if (window.indexedDB) {
        peticion = window.indexedDB.open("mycard");
        peticion.onsuccess = function(evento) {
            var bd = evento.target.result;
            var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
            var almacenUsuarios = transaccion.objectStore("usuarios");
            almacenUsuarios.put({
                uuid: usuario.uuid,
                cartas: usuario.cartas,
                cartas_repetidas: usuario.cartas_repetidas,
                correo: usuario.correo,
                imagen: usuario.imagen,
                nick: usuario.nick,
                nombre: usuario.nombre,
                pais: usuario.pais,
                password: usuario.password,
                saldo: usuario.saldo,
                sexo: usuario.sexo
            });
            bd.close();
        }
    } else alert("Su navegador no soporta IndexedDB.");
}

function eliminarUsuarioDB(uuid) {
    if (window.indexedDB) {
        peticion = window.indexedDB.open("mycard");
        peticion.onsuccess = function(evento) {
            var bd = evento.target.result;
            var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
            var almacenUsuarios = transaccion.objectStore("usuarios");
            var peticionEliminacion = almacenUsuarios.delete(uuid);
            peticionEliminacion.onsuccess = function() {
                alert("Usuario eliminado correctamente");
            }
            bd.close();
            location.href = "../..";
        }
        peticion.onerror = function(evento) {
            alert("EVENTO: error\nNo se ha abierto la BBDD\nSe produce al intentar abrir la BBDD con una versión anterior a la existente.");
        };

        peticion.onblocked = function(evento) {
            alert("EVENTO: blocked\nBBDD bloqueada\nSe produce al intentar abrir la BBDD con una nueva versión y esta no fue antes cerrada.");
        };

        peticion.onupgradeneeded = function(evento) {
            alert("EVENTO: upgradeneeded");
        };
    } else alert("Su navegador no soporta IndexedDB.");
}