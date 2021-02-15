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
            almacenCartas.add({
                nombre: "Asuka - Asuka Lock",
                imagen: "../../images/cards/11.png"
            });
            almacenCartas.add({
                nombre: "Batista",
                imagen: "../../images/cards/12.png"
            });
            almacenCartas.add({
                nombre: "Becky Lynch",
                imagen: "../../images/cards/13.png"
            });
            almacenCartas.add({
                nombre: "Becky Lynch - BEX-PLODER",
                imagen: "../../images/cards/14.png"
            });
            almacenCartas.add({
                nombre: "Beth Phoenix",
                imagen: "../../images/cards/15.png"
            });
            almacenCartas.add({
                nombre: "Big E",
                imagen: "../../images/cards/16.png"
            });
            almacenCartas.add({
                nombre: "Big Show",
                imagen: "../../images/cards/17.png"
            });
            almacenCartas.add({
                nombre: "Bobby Fish",
                imagen: "../../images/cards/18.png"
            });
            almacenCartas.add({
                nombre: "Braun Strowman",
                imagen: "../../images/cards/19.png"
            });
            almacenCartas.add({
                nombre: "Braun Strowman - Running Powerslam 1",
                imagen: "../../images/cards/20.png"
            });
            almacenCartas.add({
                nombre: "Braun Strowman - Running Powerslam 2",
                imagen: "../../images/cards/21.png"
            });
            almacenCartas.add({
                nombre: "Bray Wyatt",
                imagen: "../../images/cards/22.png"
            });
            almacenCartas.add({
                nombre: "Brock Lesnar",
                imagen: "../../images/cards/23.png"
            });
            almacenCartas.add({
                nombre: "Brock Lesnar - F-5",
                imagen: "../../images/cards/24.png"
            });
            almacenCartas.add({
                nombre: "Candice Lerae",
                imagen: "../../images/cards/25.png"
            });
            almacenCartas.add({
                nombre: "Cedric Alexander",
                imagen: "../../images/cards/26.png"
            });
            almacenCartas.add({
                nombre: "Cesaro",
                imagen: "../../images/cards/27.png"
            });
            almacenCartas.add({
                nombre: "Charlotte Flair",
                imagen: "../../images/cards/28.png"
            });
            almacenCartas.add({
                nombre: "Chyna",
                imagen: "../../images/cards/29.png"
            });
            almacenCartas.add({
                nombre: "Damian Priest",
                imagen: "../../images/cards/30.png"
            });
            almacenCartas.add({
                nombre: "Daniel Bryan",
                imagen: "../../images/cards/31.png"
            });
            almacenCartas.add({
                nombre: "Daniel Bryan - Lebell Lock",
                imagen: "../../images/cards/32.png"
            });
            almacenCartas.add({
                nombre: "Dash Wilder",
                imagen: "../../images/cards/33.png"
            });
            almacenCartas.add({
                nombre: "Diesel",
                imagen: "../../images/cards/34.png"
            });
            almacenCartas.add({
                nombre: "Doink The Clown",
                imagen: "../../images/cards/35.png"
            });
            almacenCartas.add({
                nombre: "Drew McIntyre",
                imagen: "../../images/cards/36.png"
            });
            almacenCartas.add({
                nombre: "Drew McIntyre - Claymore Kick",
                imagen: "../../images/cards/37.png"
            });
            almacenCartas.add({
                nombre: "Eddie Guerrero",
                imagen: "../../images/cards/38.png"
            });
            almacenCartas.add({
                nombre: "Ember Moon",
                imagen: "../../images/cards/39.png"
            });
            almacenCartas.add({
                nombre: "Erik",
                imagen: "../../images/cards/40.png"
            });
            almacenCartas.add({
                nombre: "Finn Bálor",
                imagen: "../../images/cards/41.png"
            });
            almacenCartas.add({
                nombre: "Hulk Hogan",
                imagen: "../../images/cards/42.png"
            });
            almacenCartas.add({
                nombre: "Hulk Hogan - Atomic Leg Drop",
                imagen: "../../images/cards/43.png"
            });
            almacenCartas.add({
                nombre: "Ivar",
                imagen: "../../images/cards/44.png"
            });
            almacenCartas.add({
                nombre: "John Cena",
                imagen: "../../images/cards/45.png"
            });
            almacenCartas.add({
                nombre: "John Morrison",
                imagen: "../../images/cards/46.png"
            });
            almacenCartas.add({
                nombre: "John Morrison - Startship Pain",
                imagen: "../../images/cards/47.png"
            });
            almacenCartas.add({
                nombre: "Johnny Gargano",
                imagen: "../../images/cards/48.png"
            });
            almacenCartas.add({
                nombre: "Johnny Gargano - Gargano Escape",
                imagen: "../../images/cards/49.png"
            });
            almacenCartas.add({
                nombre: "Kairi Sane",
                imagen: "../../images/cards/50.png"
            });
            almacenCartas.add({
                nombre: "Kane",
                imagen: "../../images/cards/51.png"
            });
            almacenCartas.add({
                nombre: "Karl Anderson",
                imagen: "../../images/cards/52.png"
            });
            almacenCartas.add({
                nombre: "Kassius Ohno",
                imagen: "../../images/cards/53.png"
            });
            almacenCartas.add({
                nombre: "Keith Lee",
                imagen: "../../images/cards/54.png"
            });
            almacenCartas.add({
                nombre: "Kevin Owens",
                imagen: "../../images/cards/55.png"
            });
            almacenCartas.add({
                nombre: "Kevin Owens - Stunner",
                imagen: "../../images/cards/56.png"
            });
            almacenCartas.add({
                nombre: "King Corbin",
                imagen: "../../images/cards/57.png"
            });
            almacenCartas.add({
                nombre: "Kofi Kingston",
                imagen: "../../images/cards/58.png"
            });
            almacenCartas.add({
                nombre: "Kushida",
                imagen: "../../images/cards/59.png"
            });
            almacenCartas.add({
                nombre: "Kyle O'Reilly",
                imagen: "../../images/cards/60.png"
            });
            almacenCartas.add({
                nombre: "Luke Gallows",
                imagen: "../../images/cards/61.png"
            });
            almacenCartas.add({
                nombre: "Matt Riddle",
                imagen: "../../images/cards/62.png"
            });
            almacenCartas.add({
                nombre: "Mick Foley",
                imagen: "../../images/cards/63.png"
            });
            almacenCartas.add({
                nombre: "Mr. Perfect",
                imagen: "../../images/cards/64.png"
            });
            almacenCartas.add({
                nombre: "Natalya",
                imagen: "../../images/cards/65.png"
            });
            almacenCartas.add({
                nombre: "Otis",
                imagen: "../../images/cards/66.png"
            });
            almacenCartas.add({
                nombre: "Randy Orton",
                imagen: "../../images/cards/67.png"
            });
            almacenCartas.add({
                nombre: "Rey Mysterio",
                imagen: "../../images/cards/68.png"
            });
            almacenCartas.add({
                nombre: "Rezar",
                imagen: "../../images/cards/69.png"
            });
            almacenCartas.add({
                nombre: "Rhea Ripley",
                imagen: "../../images/cards/70.png"
            });
            almacenCartas.add({
                nombre: "Ricky 'The Dragon' Steamboat",
                imagen: "../../images/cards/71.png"
            });
            almacenCartas.add({
                nombre: "Ricochet",
                imagen: "../../images/cards/72.png"
            });
            almacenCartas.add({
                nombre: "Rikishi",
                imagen: "../../images/cards/73.png"
            });
            almacenCartas.add({
                nombre: "Roderick Strong",
                imagen: "../../images/cards/74.png"
            });
            almacenCartas.add({
                nombre: "Roman Reigns",
                imagen: "../../images/cards/75.png"
            });
            almacenCartas.add({
                nombre: "Ronda Rousey",
                imagen: "../../images/cards/76.png"
            });
            almacenCartas.add({
                nombre: "Ruby Riott",
                imagen: "../../images/cards/77.png"
            });
            almacenCartas.add({
                nombre: "Sami Zayn",
                imagen: "../../images/cards/78.png"
            });
            almacenCartas.add({
                nombre: "Samoa Joe",
                imagen: "../../images/cards/79.png"
            });
            almacenCartas.add({
                nombre: "Samoa Joe - The Coquina Cluth 1",
                imagen: "../../images/cards/80.png"
            });
            almacenCartas.add({
                nombre: "Samoa Joe - The Coquina Cluth 2",
                imagen: "../../images/cards/81.png"
            });
            almacenCartas.add({
                nombre: "Sarah Logan",
                imagen: "../../images/cards/82.png"
            });
            almacenCartas.add({
                nombre: "Sasha Banks",
                imagen: "../../images/cards/83.png"
            });
            almacenCartas.add({
                nombre: "Scott Dawson",
                imagen: "../../images/cards/84.png"
            });
            almacenCartas.add({
                nombre: "Seth Rollins",
                imagen: "../../images/cards/85.png"
            });
            almacenCartas.add({
                nombre: "Seth Rollins - The Stomp 1",
                imagen: "../../images/cards/86.png"
            });
            almacenCartas.add({
                nombre: "Seth Rollins - The Stomp 2",
                imagen: "../../images/cards/87.png"
            });
            almacenCartas.add({
                nombre: "Shawn Michaels",
                imagen: "../../images/cards/88.png"
            });
            almacenCartas.add({
                nombre: "Shawn Michaels - Sweet Chin Music",
                imagen: "../../images/cards/89.png"
            });
            almacenCartas.add({
                nombre: "Shayna Baszler",
                imagen: "../../images/cards/90.png"
            });
            almacenCartas.add({
                nombre: "Shayna Baszler - Kirifuda Clutch",
                imagen: "../../images/cards/91.png"
            });
            almacenCartas.add({
                nombre: "Sheamus",
                imagen: "../../images/cards/92.png"
            });
            almacenCartas.add({
                nombre: "Shinsuke Nakamura",
                imagen: "../../images/cards/93.png"
            });
            almacenCartas.add({
                nombre: "Stone Cold Steve Austin",
                imagen: "../../images/cards/94.png"
            });
            almacenCartas.add({
                nombre: "Stone Cold Steve Austin - Stone Cold Stunner",
                imagen: "../../images/cards/95.png"
            });
            almacenCartas.add({
                nombre: "The Miz",
                imagen: "../../images/cards/96.png"
            });
            almacenCartas.add({
                nombre: "The Rock",
                imagen: "../../images/cards/97.png"
            });
            almacenCartas.add({
                nombre: "Titus O'Neil",
                imagen: "../../images/cards/98.png"
            });
            almacenCartas.add({
                nombre: "Toni Storm",
                imagen: "../../images/cards/99.png"
            });
            almacenCartas.add({
                nombre: "Triple H",
                imagen: "../../images/cards/100.png"
            });
            almacenCartas.add({
                nombre: "Tucker",
                imagen: "../../images/cards/101.png"
            });
            almacenCartas.add({
                nombre: "Ultimate Warrior",
                imagen: "../../images/cards/102.png"
            });
            almacenCartas.add({
                nombre: "Undertaker",
                imagen: "../../images/cards/103.png"
            });
            almacenCartas.add({
                nombre: "Walter",
                imagen: "../../images/cards/104.png"
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