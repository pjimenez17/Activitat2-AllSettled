// Crear cinco promesas con tiempos de espera específicos
const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promesa 1 resuelta'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 4000, 'Promesa 2 resuelta'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 10000, 'Promesa 3 resuelta'));
const promise4 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promesa 4 resuelta'));
const promise5 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promesa 5 resuelta'));

// Agrupar las promesas en un array
const promises = [promise1, promise2, promise3, promise4, promise5];

// Utilizar Promise.all para esperar a que todas las promesas se resuelvan
Promise.all(promises)
    .then((results) => {
        // Imprimir los resultados de todas las promesas
        results.forEach((result) => console.log(result));
    })
    .catch((error) => {
        // Capturar cualquier error que ocurra durante la ejecución de Promise.all
        console.error('Error al ejecutar Promise.all:', error);
    });

/*Creación de Promesas: Se crean cinco promesas con setTimeout, cada una con un tiempo de espera específico.
Agrupación en un Array: Se agrupan todas las promesas en un array llamado promises.
Promise.all: Se utiliza Promise.all para esperar a que todas las promesas se resuelvan. Si alguna promesa es rechazada, se pasa al bloque .catch.
Manejo de Resultados: En el bloque .then, se imprime el array de resultados de todas las promesas.
Manejo de Errores: En el bloque .catch, se captura y maneja cualquier error que pueda ocurrir durante la ejecución de Promise.all.*/