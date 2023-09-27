// Leer el contenido del elemento <title> y mostrarlo en la consola
const title = document.querySelector('title').textContent;
console.log(title);

// Leer los datos del HTML y mostrar los nombres completos en la consola
const primerNombre1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(1) + dd').textContent;
const segundoNombre1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(2) + dd').textContent;
const primerApellido1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(3) + dd').textContent;
const segundoApellido1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(4) + dd').textContent;

const primerNombre2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(1) + dd').textContent;
const segundoNombre2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(2) + dd').textContent;
const primerApellido2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(3) + dd').textContent;
const segundoApellido2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(4) + dd').textContent;

function formatearNombreCompleto(nombre, segundoNombre, primerApellido, segundoApellido) {
    let nombreCompleto = nombre;
    if (segundoNombre) {
        nombreCompleto += ` ${segundoNombre}`;
    }
    if (primerApellido) {
        nombreCompleto += ` ${primerApellido}`;
    }
    if (segundoApellido) {
        nombreCompleto += ` ${segundoApellido}`;
    }
    return nombreCompleto;
}

console.log(`-----
Integrante 1: "${formatearNombreCompleto(primerNombre1, segundoNombre1, primerApellido1, segundoApellido1)}"
Integrante 2: "${formatearNombreCompleto(primerNombre2, segundoNombre2, primerApellido2, segundoApellido2)}"
-----`);


// Comprobar nombres coincidentes
//se encierra esta parte dentro de un setTimeout para que cargue la lista del html del inicio sin que el confirm interfiera 
setTimeout(() => {
if (
    ((primerNombre1.toLowerCase() === primerNombre2.toLowerCase() && primerNombre1.toLowerCase() !== '') ||
    (segundoNombre1.toLowerCase() === primerNombre2.toLowerCase() && segundoNombre1.toLowerCase() !== '') ||
    (primerNombre1.toLowerCase() === segundoNombre2.toLowerCase() && primerNombre1.toLowerCase() !== '') ||
    (segundoNombre1.toLowerCase() === segundoNombre2.toLowerCase() && segundoNombre1.toLowerCase() !== '')) &&
    confirm('Hubo coincidencias en los nombres. ¿Deseas resaltarlos?')
) {
    const color = prompt('Ingresa un color para destacar los nombres coincidentes (por ejemplo, "red" o "#c4203f"):');
    if (color) {
        // Crear arrays con los nombres para facilitar la comparación
        const nombres1 = [primerNombre1, segundoNombre1];
        const nombres2 = [primerNombre2, segundoNombre2];
        
        // Encontrar nombres coincidentes
        const coincidentes = nombres1.filter(nombre => nombres2.includes(nombre));
        
        // Resaltar nombres coincidentes con el color especificado
        const ddElements = document.querySelectorAll('dd');
        for (const dd of ddElements) {
            const texto = dd.textContent.toLowerCase();
            for (const nombre of coincidentes) {
                if (texto.includes(nombre.toLowerCase())) {
                    dd.innerHTML = dd.innerHTML.replace(new RegExp(nombre, 'gi'), `<span style="color: ${color};">${nombre}</span>`);
                }
            }
        }
    }
}
else {
    console.log('No hubo coincidencias en los nombres.');
}
}, 2000); 


// Parte de consultar los apellidos
// Se encierra todo dentro de un setTimeout para que el usuario pueda ver primero la comparación de los nombres y luego pasar a la de los apellidos
setTimeout(() => {
    // Consultar si se desea comparar los apellidos
    const compararApellidos = confirm('¿Deseas comparar los apellidos?');

    if (compararApellidos) {
        const primerApellido1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(3) + dd').textContent;
        const segundoApellido1 = document.querySelector('dl:nth-of-type(1) dt:nth-of-type(4) + dd').textContent;

        const primerApellido2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(3) + dd').textContent;
        const segundoApellido2 = document.querySelector('dl:nth-of-type(2) dt:nth-of-type(4) + dd').textContent;

        // Crear arrays con los apellidos para facilitar la comparación
        const apellidos1 = [primerApellido1, segundoApellido1];
        const apellidos2 = [primerApellido2, segundoApellido2];

        // Encontrar apellidos coincidentes
        const coincidentesApellidos = apellidos1.filter(apellido => apellidos2.includes(apellido));

        if (coincidentesApellidos.length > 0) {
            const color = prompt('Ingresa un color para destacar los apellidos coincidentes (por ejemplo, "red" o "#c4203f"):');
            if (color) {
                // Resaltar apellidos coincidentes con el color especificado
                const ddElements = document.querySelectorAll('dd');
                for (const dd of ddElements) {
                    const texto = dd.textContent.toLowerCase();
                    for (const apellido of coincidentesApellidos) {
                        if (texto.includes(apellido.toLowerCase())) {
                            dd.innerHTML = dd.innerHTML.replace(new RegExp(apellido, 'gi'), `<span style="color: ${color};">${apellido}</span>`);
                        }
                    }
                }
            }
        } else {
            console.log('No hubo coincidencias en los apellidos.');
        }
    }
}, 4000); 