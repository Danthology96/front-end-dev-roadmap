
/// Not a good practice
// function greet(name) {
//     return `Hello ${name}`;
// }

/// good practice
const greet = function (name) {
    return `Hello ${name}`;
}


const greet2 = (name) => {
    return `Hello ${name}`;
}
const greet3 = (name) => `Hello ${name}`;

const getUser = () => ({
    uid: 'ABC123',
    username: 'TheDaniel',
});

console.log(greet('Daniel'));
console.log(greet2('Daniel'));
console.log(greet3('Pedro'));

console.log(getUser());

const getActiveUser = (name) => (
    {
        uid: 'ABC567',
        username: name,
    });


const activeUser = getActiveUser('Beto');
console.log(activeUser);
