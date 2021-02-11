function rellenarSelectPais() {
    if (document.body.contains(document.getElementById("pais"))) {
        var vector_paises = ["Seleccionar", "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Puerto Rico", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
        vector_paises.forEach(x => {
            var nodo_option = document.createElement("option");
            nodo_option.textContent = x;
            nodo_option.value = x;
            document.getElementById("pais").options.add(nodo_option);
        });
    }
}

function arrastrarAvatar() {
    var htmlCollection = document.getElementById("avatares").children;
    for (let i = 0; i < htmlCollection.length; i++) {
        htmlCollection.item(i).ondragstart = function(e) {
            e.dataTransfer.setData("", e.target.id);
        };
    }
    var nodoMyAvatar = document.getElementById("myavatar");
    nodoMyAvatar.ondragover = function(e) { e.preventDefault(); };
    nodoMyAvatar.ondrop = function(e) {
        if (e.target.id == "myavatar") {
            e.preventDefault();
            var datos = e.dataTransfer.getData("");
            if (e.target.hasChildNodes()) {
                e.target.removeChild(e.target.firstChild);
            }
            var clon = document.getElementById(datos).cloneNode();
            clon.id = "A";
            clon.setAttribute("draggable", false);
            e.target.appendChild(clon);
        }
    };
}

function controlarDivsImagen() {
    var nodoAvatares = document.getElementById("avatares");
    var nodoMyAvatar = document.getElementById("myavatar");
    var radios = document.getElementsByName("sexo");
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("change", function() {
            while (nodoMyAvatar.firstChild) {
                nodoMyAvatar.removeChild(nodoMyAvatar.lastChild);
            }
            if (radios[0].checked) {
                for (let i = 0; i <= 3; i++) {
                    nodoAvatares.children[i].setAttribute("src", "images/avatars/man/M" + (i + 1) + ".PNG");
                    nodoAvatares.children[i].setAttribute("alt", "Avatar de hombre " + (i + 1));
                    nodoAvatares.children[i].id = "H" + (i + 1);
                }
            } else {
                for (let i = 0; i <= 3; i++) {
                    nodoAvatares.children[i].setAttribute("src", "images/avatars/woman/W" + (i + 1) + ".PNG");
                    nodoAvatares.children[i].setAttribute("alt", "Avatar de mujer " + (i + 1));
                    nodoAvatares.children[i].id = "M" + (i + 1);
                }
            }
        });
    }
}

function validarFormularioRegistro() {
    var mensaje = "Error en los siguientes campos:\n\n";

    var correo = document.getElementById("correo");
    var pass = document.getElementById("pass");
    var nick = document.getElementById("nick");
    var nombre = document.getElementById("nombre");
    var pais = document.getElementById("pais");
    var imagen = document.getElementById("myavatar");

    var expresion_correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
    var expresion_pass = /^(?=.*[A-Z].*[A-Z])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{7,14}$/;
    var expresion_nick = /^[A-ZÑa-zñ0-9_-]{4,20}$/;
    var expresion_nombre = /^([A-ZÑÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

    if (!(expresion_correo.test(correo.value))) {
        mensaje += "-> CORREO ELECTRÓNICO\n";
        correo.style.border = "2px solid red";
    } else
        correo.style.border = "2px solid #26a59a";

    if (!(expresion_pass.test(pass.value))) {
        mensaje += "-> PASSWORD\n";
        pass.style.border = "2px solid red";
    } else
        pass.style.border = "2px solid #26a59a";

    if (!(expresion_nick.test(nick.value))) {
        mensaje += "-> NICK\n";
        nick.style.border = "2px solid red";
    } else
        nick.style.border = "2px solid #26a59a";

    if (!(expresion_nombre.test(nombre.value))) {
        mensaje += "-> NOMBRE\n";
        nombre.style.border = "2px solid red";
    } else
        nombre.style.border = "2px solid #26a59a";

    if (pais.value == "Seleccionar") {
        mensaje += "-> PAÍS: Seleccione un país\n";
        pais.style.border = "2px solid red";
    } else
        pais.style.border = "2px solid #26a59a";

    if (!imagen.hasChildNodes()) {
        mensaje += "-> IMAGEN";
        document.getElementById("imagen").style.border = "2px solid red";
    } else
        document.getElementById("imagen").style.border = "2px solid #26a59a";

    if (mensaje != "Error en los siguientes campos:\n\n") {
        alert(mensaje);
        return false;
    } else
        return true;
}

//SI EXISTE LA COOKIE "sesion" REDIRIGE DIRECTAMENTE SEGÚN SU VALOR
var valor_cookie = obtenerCookie("sesion");
if (valor_cookie == "admin") {
    location.href = "private/admin";
} else if (valor_cookie == "user") {
    location.href = "private/user";
} else {
    //FORMULARIO LOG IN
    document.getElementById("registro-div").style.display = "none";

    document.getElementById("formulario_registro").addEventListener("click", function() {
        document.getElementById("login-div").style.display = "none";
        document.getElementById("registro-div").style.display = "";
    });

    document.getElementById("login").onclick = function() {
        var valor_login_correo = document.getElementById("login_correo").value;
        var valor_login_password = document.getElementById("login_password").value;
        if (valor_login_correo != "" && valor_login_password != "") {
            if (valor_login_correo == "admin" && valor_login_password == "admin") {
                establecerCookie("sesion", "admin", 3);
                location.href = "private/admin";
            } else {
                if (window.indexedDB) {
                    peticion = window.indexedDB.open("mycard");
                    peticion.onsuccess = function(evento) {
                        var flag = false;
                        var bd = evento.target.result;
                        var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
                        var almacenUsuarios = transaccion.objectStore("usuarios");
                        var peticionGetAllUsuarios = almacenUsuarios.getAll();
                        var almacenCartas = transaccion.objectStore("cartas");
                        var peticionGetAllCartas = almacenCartas.getAll();

                        peticionGetAllUsuarios.onsuccess = function() {
                            var valores = peticionGetAllUsuarios.result;
                            for (usuario in valores) {
                                if (valor_login_correo == valores[usuario].correo && valor_login_password == valores[usuario].password) {
                                    flag = true;
                                    var u = {
                                        cartas: valores[usuario].cartas,
                                        cartas_repetidas: valores[usuario].cartas_repetidas,
                                        correo: valores[usuario].correo,
                                        imagen: valores[usuario].imagen,
                                        nick: valores[usuario].nick,
                                        nombre: valores[usuario].nombre,
                                        pais: valores[usuario].pais,
                                        password: valores[usuario].password,
                                        saldo: valores[usuario].saldo,
                                        sexo: valores[usuario].sexo,
                                        uuid: valores[usuario].uuid
                                    };
                                    establecerLS("usuario_json", JSON.stringify(u));
                                    break;
                                }
                            }
                        }

                        peticionGetAllCartas.onsuccess = function() {
                            if (flag) {
                                var valores = peticionGetAllCartas.result;
                                var cartas = [];
                                for (carta in valores) {
                                    var c = {
                                        id: valores[carta].id,
                                        imagen: valores[carta].imagen,
                                        nombre: valores[carta].nombre
                                    };
                                    cartas.push(c);
                                }
                                establecerLS("cartas_json", JSON.stringify(cartas));
                                establecerCookie("sesion", "user", 3);
                                location.href = "private/user";
                            } else alert("Credenciales inválidas.");
                            bd.close();
                        }
                    }
                } else alert("Su navegador no soporta IndexedDB.");
            }
        } else alert("Rellene los campos del formulario LOG IN.");
    };

    //FORMULARIO DE REGISTRO
    rellenarSelectPais();
    arrastrarAvatar();
    controlarDivsImagen();

    document.getElementById("formulario_login").addEventListener("click", function() {
        document.getElementById("registro-div").style.display = "none";
        document.getElementById("login-div").style.display = "";
    });

    document.getElementById("registro_reset").addEventListener("click", function() {
        var correo = document.getElementById("correo");
        var pass = document.getElementById("pass");
        var nick = document.getElementById("nick");
        var nombre = document.getElementById("nombre");
        var pais = document.getElementById("pais");
        correo.value = "";
        correo.style.border = "2px solid gainsboro";
        pass.value = "";
        pass.style.border = "2px solid gainsboro";
        nick.value = "";
        nick.style.border = "2px solid gainsboro";
        nombre.value = "";
        nombre.style.border = "2px solid gainsboro";
        pais.value = "Seleccionar";
        pais.style.border = "2px solid gainsboro";
        var radios = document.getElementsByName("sexo");
        if (radios[1].checked) {
            radios[0].checked = true;
            var nodoAvatares = document.getElementById("avatares");
            for (let i = 0; i <= 3; i++) {
                nodoAvatares.children[i].setAttribute("src", "images/avatars/man/M" + (i + 1) + ".PNG");
                nodoAvatares.children[i].setAttribute("alt", "Avatar de hombre " + (i + 1));
                nodoAvatares.children[i].id = "H" + (i + 1);
            }
        }
        var nodoMyAvatar = document.getElementById("myavatar");
        while (nodoMyAvatar.firstChild) {
            nodoMyAvatar.removeChild(nodoMyAvatar.lastChild);
        }
        document.getElementById("imagen").style.border = "";
    });

    document.getElementById("registrar").onclick = function() {
        if (validarFormularioRegistro()) {
            //alert("TODOS LOS CAMPOS SON CORRECTOS");
            //Dar de alta si no existe el correo y el nick ya que son índices únicos
            if (window.indexedDB) {
                peticion = window.indexedDB.open("mycard");
                peticion.onsuccess = function(evento) {
                    var flag = false;
                    var bd = evento.target.result;
                    var transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
                    var almacenUsuarios = transaccion.objectStore("usuarios");
                    var peticionGetAll = almacenUsuarios.getAll();

                    peticionGetAll.onsuccess = function() {
                        var valores = peticionGetAll.result;
                        for (usuario in valores) {
                            // console.log(valores[usuario]);
                            if (document.getElementById("correo").value == valores[usuario].correo || document.getElementById("nick").value == valores[usuario].nick) {
                                flag = true;
                                break;
                            }
                        }
                        if (flag) {
                            alert("Usuario no dado de alta ya que el correo electrónico o el nick ya existe en la BBDD.");
                        } else {
                            var radios = document.getElementsByName("sexo");
                            var sexo;
                            if (radios[0].checked) {
                                sexo = radios[0].value;
                            } else sexo = radios[1].value;
                            //INSERCIÓN
                            almacenUsuarios.add({
                                uuid: generarUUID(),
                                correo: document.getElementById("correo").value,
                                password: document.getElementById("pass").value,
                                nick: document.getElementById("nick").value,
                                nombre: document.getElementById("nombre").value,
                                pais: document.getElementById("pais").value,
                                sexo: sexo,
                                imagen: "../../" + document.getElementById("A").getAttribute("src"),
                                saldo: 0,
                                cartas: [],
                                cartas_repetidas: []
                            });
                            alert("Usuario dado de alta correctamente.");
                            location.href = ".";
                        }
                        bd.close();
                    }
                }
            } else alert("Su navegador no soporta IndexedDB.");
        }
    };
}