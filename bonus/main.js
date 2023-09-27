// Función para formatear el nombre completo
function formatearNombreCompleto(nombre, segundoNombre, primerApellido, segundoApellido) {
    let nombreCompleto = "";
    if (nombre) {
        nombreCompleto += nombre;
    }
    if (segundoNombre) {
        nombreCompleto += ` ${segundoNombre}`;
    }
    if (primerApellido) {
        nombreCompleto += ` ${primerApellido}`;
    }
    if (segundoApellido) {
        nombreCompleto += ` ${segundoApellido}`;
    }
    return nombreCompleto.trim(); // Eliminar espacios innecesarios al principio o al final
}

// Obtener elementos del formulario
const completarIntegrante1 = document.getElementById('completarIntegrante1');
const completarIntegrante2 = document.getElementById('completarIntegrante2');

// Función para mostrar resultados en el elemento HTML
function mostrarResultadoEnHTML(resultado) {
    const resultadoElement = document.createElement('div');
    resultadoElement.classList.add('resultado'); // Agrega la clase "resultado"
    resultadoElement.innerHTML = resultado;
    resultadosDiv.appendChild(resultadoElement);
}

// Escuchar el evento click en el botón Completar del Integrante 1
completarIntegrante1.addEventListener('click', () => {
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    const primerNombre1 = document.getElementById('primerNombre1').value || '';
    const segundoNombre1 = document.getElementById('segundoNombre1').value || '';
    const primerApellido1 = document.getElementById('primerApellido1').value || '';
    const segundoApellido1 = document.getElementById('segundoApellido1').value || '';

    const nombreCompleto1 = formatearNombreCompleto(primerNombre1, segundoNombre1, primerApellido1, segundoApellido1);
    mostrarResultadoEnHTML(`Integrante 1: "${nombreCompleto1}"<br>`);

    // Escuchar el evento click en el botón Completar del Integrante 2
    completarIntegrante2.addEventListener('click', () => {
        const primerNombre2 = document.getElementById('primerNombre2').value || '';
        const segundoNombre2 = document.getElementById('segundoNombre2').value || '';
        const primerApellido2 = document.getElementById('primerApellido2').value || '';
        const segundoApellido2 = document.getElementById('segundoApellido2').value || '';

        const nombreCompleto2 = formatearNombreCompleto(primerNombre2, segundoNombre2, primerApellido2, segundoApellido2);
        mostrarResultadoEnHTML(`Integrante 2: "${nombreCompleto2}"<br>`);

        // Comprobar coincidencias en los nombres
        const nombres1 = [primerNombre1, segundoNombre1].filter(Boolean);
        const nombres2 = [primerNombre2, segundoNombre2].filter(Boolean);
        const nombresCoincidentes = nombres1.filter(nombre => nombres2.includes(nombre));

        if (nombresCoincidentes.length > 0) {
            mostrarResultadoEnHTML('Hubo coincidencias en los nombres.<br>');
            mostrarResultadoEnHTML(`Palabra en común en los nombres: ${nombresCoincidentes[0]}<br>`);
        } else {
            mostrarResultadoEnHTML('No hubo coincidencias en los nombres.<br>');
        }

        // Comprobar si se desea comparar los apellidos
        const compararApellidos = true;

        if (compararApellidos) {
            const apellidos1 = [primerApellido1, segundoApellido1].filter(Boolean);
            const apellidos2 = [primerApellido2, segundoApellido2].filter(Boolean);
            const apellidosCoincidentes = apellidos1.filter(apellido => apellidos2.includes(apellido));

            if (apellidosCoincidentes.length > 0) {
                mostrarResultadoEnHTML('Hubo coincidencias en los apellidos.<br>');
                mostrarResultadoEnHTML(`Palabra en común en los apellidos: ${apellidosCoincidentes[0]}<br>`);
            } else {
                mostrarResultadoEnHTML('No hubo coincidencias en los apellidos.<br>');
            }
        }
    });
});
