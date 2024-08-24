/* 
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline.

*/

const usersDatabase = [{ username: "andres", password: "123", }, { username: "caro", password: "456", }, { username: "mariana", password: "789", },];
const usersTimeline = [{ username: "Estefany", timeline: "Me encata Javascript!", }, { username: "Oscar", timeline: "Bebeloper es lo mejor!", }, { username: "Mariana", timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©", }, { username: "Andres", timeline: "Yo hoy no quiero trabajar", },];

let username = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña");

/// validacion de usuario y contraseña


function checkUser(username, password) {
    for (user of usersDatabase) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (checkUser(username, password)) {
        console.log("Bienvenido!");
        document.write("<h1>Bienvenido!</h1>")
        document.write(usersTimeline.map(user => `<p>${user.username}: ${user.timeline}</p>`).join(''))
    } else {
        console.log("Usuario o contraseña incorrectos");
        document.write("<p>Usuario o contraseña incorrectos</p>")
    }
}

signIn(username, password);