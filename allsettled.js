// Crear cinco promesas con tiempos de espera específicos
const promise1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Promesa 1 resuelta'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 4000, 'Promesa 2 resuelta'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 10000, 'Promesa 3 resuelta'));
const promise4 = new Promise((resolve) => setTimeout(resolve, 1000, 'Promesa 4 resuelta'));
const promise5 = new Promise((resolve) => setTimeout(resolve, 3000, 'Promesa 5 resuelta'));

// Agrupar las promesas en un array
const promises = [promise1, promise2, promise3, promise4, promise5];

// Utilizar Promise.allSettled para esperar a que todas las promesas se resuelvan o se rechacen
Promise.allSettled(promises)
  .then((results) => {
    // Imprimir el estado de cada promesa (fulfilled o rejected)
    results.forEach((result) => console.log(result.status));
  })
  .catch((error) => {
    // Capturar cualquier error que ocurra durante la ejecución de Promise.allSettled
    console.error('Error al ejecutar Promise.allSettled:', error);
  });
  
/*
Creación de Promesas: Se crean cinco promesas con setTimeout, cada una con un tiempo de espera específico.
Agrupación en un Array: Se agrupan todas las promesas en un array llamado promises.
Promise.allSettled: Se utiliza Promise.allSettled para esperar a que todas las promesas se resuelvan o se rechacen.
Manejo de Resultados: En el bloque .then, se imprime el estado de cada promesa (fulfilled o rejected) utilizando results.forEach.
Manejo de Errores: En el bloque .catch, se captura y maneja cualquier error que pueda ocurrir durante la ejecución de Promise.allSettled.*/
