/// las promesas tienen 3 estados:
/// - pending: estado inicial, no se ha completado ni rechazado
/// - fullfilled: la operación se completó exitosamente
/// - rejected: la operación falló


/// los callbacks son:
/// - resolve: se ejecuta cuando la promesa se resuelve
/// - rejected: se ejecuta cuando la promesa se rechaza

/// luego se ejecuta el método then() que recibe el resultado de la promesa
/// también se puede ejecutar el catch() para manejar errores

/// ejemplo:
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccess = true;
        if (operationSuccess) {
            resolve('Operation success');
        } else {
            reject('Operation failed');
        }
    }, 1000);
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});
