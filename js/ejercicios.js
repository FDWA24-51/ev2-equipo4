const indiceEjercicios = document.getElementsByClassName("indiceEj");

//----------------Funcion para desplegar indice----------------------------------
function desplegarIndice() {
        
// Iteracionn sobre todas las etiquetas con la clase 'indiceEj' para mostrarlos
for (let i = 0; i < indiceEjercicios.length; i++) {
    indiceEjercicios[i].style.display = 'block';  
}
}
//-------------------Fin de funcion----------------------------------------------



//---------------Funcion para ocultar indice-------------------------------------
function ocultarIndice() {
        
// Iteracion sobre todas las etiquetas con la clase 'indiceEj' para ocultarlos
for (let i = 0; i < indiceEjercicios.length; i++) {
    indiceEjercicios[i].style.display = 'none';
}      
}
//------------------Fin de funcion-----------------------------------------------




//-------------------Ejercicio 1------------------------------------------------------------------
function mostrarSaludo() {
    // Obtener el valor del nombre ingresado
    var nombre = document.getElementById("txtNombre").value;

    // Verificar si el campo no está vacío
    if (nombre) {
        // Mostrar alerta con el mensaje de bienvenida
        alert("Hola, " + nombre + ", ¡seas bienvenido(a)!");
    } else {
        // Si no se ingresó un nombre, pedir que lo ingresen
        alert("Por favor, ingresa tu nombre.");
    }
}
//-----------------Fin ejercicio 1----------------------------------------------------------------



//-------------------Ejercicio 2------------------------------------------------------------------
function calcularCostoFinal() {
    // Obtener valores ingresados
    var cantidadCompra = parseFloat(document.getElementById("txtCantidadCompra").value) || 0;
    var cantidadUnidad = parseFloat(document.getElementById("txtCantidadUnidad").value) || 0;
    var costoUnitario = parseFloat(document.getElementById("txtCostoUnitario").value) || 0;
    var descuento = parseFloat(document.getElementById("txtDescuento").value) || 0;
    var aplicarDescuento = document.getElementById("chkAplicarDescuento").checked;
    
    // Validar selección de unidades
    var unidadEntrada = document.getElementById("ddlUnidadEntrada").value;
    var unidadSalida = document.getElementById("ddlUnidadSalida").value;
    
    if (unidadEntrada === "0" || unidadSalida === "0") {
        alert("Por favor, selecciona las unidades de entrada y salida.");
        return;
    }

    // Calcular costo final (Cantidad Compra * Cantidad por Unidad * Costo Unitario)
    var costoFinal = (cantidadCompra * cantidadUnidad) * costoUnitario;
    
    // Aplicar descuento si está seleccionado
    if (aplicarDescuento) {
        costoFinal -= (costoFinal * (descuento / 100));
    }

    // Mostrar el costo final en el campo correspondiente
    document.getElementById("txtCostoFinal").value = costoFinal.toFixed(2);
}
//-----------------Fin ejercicio 2----------------------------------------------------------------



//-------------------Ejercicio 3------------------------------------------------------------------
function calcularOperacion() {
    // Pedir los dos números al usuario
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Obtener la operación seleccionada
    let operacion = document.getElementById("ddlOperacion").value;
    
    // Validar que los números ingresados sean válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Inicializar la variable de resultado
    let resultado;
    let mensajeResultado = "El resultado de la " + operacion + " con los numeros " + numero1 + " y " + numero2 + " es ";

    // Realizar la operación seleccionada
    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "dividision":
            if (numero2 === 0) {
                alert("No se puede dividir entre 0.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            alert("Por favor, seleccione una operación válida.");
            return;
    }

    // Mostrar el resultado en una alerta y en el documento
    alert(mensajeResultado + resultado);
    document.getElementById("lblResultadoOperacion").innerText = mensajeResultado + resultado;
}
//-----------------Fin ejercicio 3----------------------------------------------------------------



//-------------------Ejercicio 4------------------------------------------------------------------
function determinarTriangulo() {

    // Pedir las longitudes de los tres lados del triángulo al usuario
    let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado:"));
    let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado:"));
    let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado:"));

    // Validar que los valores ingresados sean números válidos
    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Validar si los lados pueden formar un triángulo
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 || 
        lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
        alert("Las longitudes ingresadas no forman un triángulo válido.");
        return;
    }

    // Determinar el tipo de triángulo
    let tipoTriangulo;
    if (lado1 === lado2 && lado2 === lado3) {
        tipoTriangulo = "equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        tipoTriangulo = "isósceles";
    } else {
        tipoTriangulo = "escaleno";
    }

    // Mostrar el resultado en la página
    document.getElementById("lblResultadoTriangulo").innerText = "El tipo de triángulo es " + tipoTriangulo;
}
//-----------------Fin ejercicio 4----------------------------------------------------------------



//-------------------Ejercicio 5------------------------------------------------------------------
function convertirMoneda() {
    // Obtener el monto ingresado
    let monto = parseFloat(document.getElementById("txtMonto").value);
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    // Obtener las monedas seleccionadas
    let monedaOrigen = document.getElementById("ddlMonedaOrigen").value;
    let monedaDestino = document.getElementById("ddlMonedaDestino").value;

    // Tasa de conversión
    const tasas = {
        "USD": { "USD": 1, "EUR": 0.80, "MXN": 18.00, "JPY": 105.00 },
        "EUR": { "USD": 1.25, "EUR": 1, "MXN": 22.00, "JPY": 125.00 },
        "MXN": { "USD": 0.055, "EUR": 0.045, "MXN": 1, "JPY": 5.40 },
        "JPY": { "USD": 0.0095, "EUR": 0.0080, "MXN": 0.185, "JPY": 1 }
    };

    // Realizar la conversión
    let montoFinal = monto * tasas[monedaOrigen][monedaDestino];

    // Mostrar el resultado en la página
    document.getElementById("lblResultadoConversion").innerText = `${monto} ${monedaOrigen} es igual a ${montoFinal.toFixed(2)} ${monedaDestino}`;
}
//-----------------Fin ejercicio 5----------------------------------------------------------------



//-------------------Ejercicio 6------------------------------------------------------------------
function calcularCalificacion() {
    // Obtener las calificaciones ingresadas
    let examenParcial = parseInt(document.getElementById("txtExamenParcial").value);
    let examenFinal = parseInt(document.getElementById("txtExamenFinal").value);
    let portafolio = parseInt(document.getElementById("txtPortafolio").value);
    let pia = parseInt(document.getElementById("txtPIA").value);

    // Validar que las calificaciones sean números enteros y estén en el rango adecuado
    if (isNaN(examenParcial) || isNaN(examenFinal) || isNaN(portafolio) || isNaN(pia) ||
        examenParcial < 0 || examenFinal < 0 || portafolio < 0 || pia < 0 ||
        examenParcial > 100 || examenFinal > 100 || portafolio > 100 || pia > 100) {
        alert("Por favor, ingrese calificaciones válidas entre 0 y 100.");
        return;
    }

    // Calcular la calificación final
    let calificacionFinal = (examenParcial * 0.30) + (examenFinal * 0.30) +
                            (portafolio * 0.20) + (pia * 0.20);

    // Redondear la calificación final a un número entero
    calificacionFinal = Math.round(calificacionFinal);

    // Determinar el estatus
    let estatus = calificacionFinal >= 60 ? "APROBADO" : "REPROBADO";

    // Mostrar el resultado en la página
    document.getElementById("lblResultadoCalificacion").innerText = 
        `La calificación final es ${calificacionFinal} y su estatus es ${estatus}.`;
}
//-----------------Fin ejercicio 6----------------------------------------------------------------



//-------------------Ejercicio 7------------------------------------------------------------------
let canidadClics = 0

//se crea la funcion que sume un numero al hacer clic en el boton
function contarClics(){
    canidadClics += 1;

//imrpime en un label la cantidad de clics
    document.getElementById("totalClics").innerText= "La cantidad de clics es " + canidadClics
}
//-----------------Fin ejercicio 7----------------------------------------------------------------



//-------------------Ejercicio 8------------------------------------------------------------------
function generarTabla() {
    const tipoOperacion = document.getElementById("tipoOperacion").value;
    const cantidad = document.getElementById("cantidad").value;
     const tablaContainer = document.getElementById("tablaContainer");
            tablaContainer.innerHTML = '';

            const tabla = document.createElement("table");
            tabla.setAttribute("border", "1");
            const tbody = document.createElement("tbody");

            for (let i = 1; i <= cantidad; i++) {
                const fila = document.createElement("tr");
                const celdaOperacion = document.createElement("td");
                const celdaResultado = document.createElement("td");

                if (tipoOperacion === "suma") {
                    celdaOperacion.textContent = `${i} + ${i} =`;
                    celdaResultado.textContent = i + i;
                } else if (tipoOperacion === "resta") {
                    celdaOperacion.textContent = `${i} - ${i} =`;
                    celdaResultado.textContent = i - i;
                } else if (tipoOperacion === "multiplicacion") {
                    celdaOperacion.textContent = `${i} * ${i} =`;
                    celdaResultado.textContent = i * i;
                } else if (tipoOperacion === "division") {
                    celdaOperacion.textContent = `${i} / ${i} =`;
                    celdaResultado.textContent = i / i;
                }

                fila.appendChild(celdaOperacion);
                fila.appendChild(celdaResultado);
                tbody.appendChild(fila);
            }

            tabla.appendChild(tbody);
            tablaContainer.appendChild(tabla);
        }
//-----------------Fin ejercicio 8----------------------------------------------------------------

//-------------------Ejercicio 9------------------------------------------------------------------
function convertirABinario() {
    const numeroDecimal = document.getElementById("numeroDecimal").value;

    if (isNaN(numeroDecimal) || numeroDecimal === "") {
        alert("Por favor, ingresa un número decimal válido.");
        return;
    }

    const numeroBinario = parseInt(numeroDecimal).toString(2);

    document.getElementById("resultadoBinario").textContent = numeroBinario;
}
//-----------------Fin ejercicio 9----------------------------------------------------------------

//-------------------Ejercicio 10------------------------------------------------------------------
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        function adivinarNumero() {
            const numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
            const mensaje = document.getElementById("miMensaje");

            // Validar si el valor ingresado es un número
            if (isNaN(numeroUsuario)) {
                mensaje.textContent = "Por favor, ingresa un número válido.";
                mensaje.style.color = "red";
                return;
            }

            // Comparar el número ingresado con el número aleatorio
            if (numeroUsuario === numeroAleatorio) {
                mensaje.textContent = "¡Felicidades! Adivinaste el número.";
                mensaje.style.color = "green";
                document.body.style.backgroundColor = "lightgreen"; // Cambiar el fondo a verde
            } else if (numeroUsuario < numeroAleatorio) {
                mensaje.textContent = "El número es mayor. ¡Intenta de nuevo!";
                mensaje.style.color = "orange";
            } else {
                mensaje.textContent = "El número es menor. ¡Intenta de nuevo!";
                mensaje.style.color = "orange";
            }
        }

        function reiniciarJuego() {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número aleatorio
            document.getElementById("miMensaje").textContent = ""; // Limpiar el mensaje
            document.getElementById("numeroUsuario").value = ""; // Limpiar el campo de entrada
            document.body.style.backgroundColor = ""; // Restaurar el color de fondo original
        }
//-----------------Fin ejercicio 10----------------------------------------------------------------

//-------------------Ejercicio 11------------------------------------------------------------------
const respuestasCorrectasExamen = {
    pregunta1: "respuestaExamen2",
    pregunta2: "respuestaExamen1",
    pregunta3: "respuestaExamen3"
};

function verificarExamenUsuario() {
    let puntajeExamen = 0;
    const totalPreguntasExamen = Object.keys(respuestasCorrectasExamen).length;

    // Iterar sobre cada pregunta y verificar las respuestas
    for (let pregunta in respuestasCorrectasExamen) {
        const respuestaSeleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        
        if (respuestaSeleccionada) {
            const idRespuesta = respuestaSeleccionada.id;

            // Verificar si la respuesta seleccionada es la correcta
            if (idRespuesta === respuestasCorrectasExamen[pregunta]) {
                respuestaSeleccionada.parentElement.classList.add("correcta");
                puntajeExamen++;
            } else {
                // Marcar la respuesta incorrecta seleccionada
                respuestaSeleccionada.parentElement.classList.add("incorrecta");
                
                // Marcar solo la respuesta correcta si es incorrecta la seleccionada
                const respuestaCorrectaElement = document.getElementById(respuestasCorrectasExamen[pregunta]);
                if (respuestaCorrectaElement) {
                    respuestaCorrectaElement.parentElement.classList.add("correcta");
                }
                
                // Asegurarse de que las otras respuestas no se marquen
                const otrasRespuestas = document.querySelectorAll(`input[name="${pregunta}"]`);
                otrasRespuestas.forEach(respuesta => {
                    if (respuesta.id !== respuestasCorrectasExamen[pregunta]) {
                        respuesta.parentElement.classList.remove("correcta"); // Asegúrate de eliminar la clase correcta
                    }
                });
            }
        } else {
            // Si no se seleccionó ninguna respuesta
            alert(`Por favor, selecciona una respuesta para todas las preguntas.`);
            return;
        }
    }

    // Mostrar la calificación final
    const resultadoExamen = document.getElementById("resultadoExamen");
    resultadoExamen.textContent = `Tu calificación es: ${puntajeExamen} de ${totalPreguntasExamen}`;
}
//-----------------Fin ejercicio 11----------------------------------------------------------------

//-------------------Ejercicio 12------------------------------------------------------------------
function validarFormulario() {
    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Expresiones regulares para validar los campos
    const regexNombre = /^[A-Za-z\s]+$/; // Solo letras y espacios
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Formato de email
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // Al menos 8 caracteres, una mayúscula, una minúscula y un número

    // Borrar mensajes de error previos
    const mensajesError = document.querySelectorAll(".error");
    mensajesError.forEach(mensaje => mensaje.textContent = "");

    let esValido = true;

    // Validar nombre
    if (!regexNombre.test(nombre)) {
        document.getElementById("errorNombre").textContent = "El nombre solo debe contener letras y espacios.";
        esValido = false;
    }

    // Validar email
    if (!regexEmail.test(email)) {
        document.getElementById("errorEmail").textContent = "Ingresa un correo electrónico válido.";
        esValido = false;
    }

    // Validar contraseña
    if (!regexPassword.test(password)) {
        document.getElementById("errorPassword").textContent = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.";
        esValido = false;
    }

    // Si todo es válido, muestra un mensaje de éxito
    if (esValido) {
        alert("Formulario enviado exitosamente.");
    }

    return esValido; // Retorna false para evitar el envío si hay errores
}
//-----------------Fin ejercicio 12----------------------------------------------------------------