/// Array Destructuring
const characters = ['Goku', 'Vegeta', 'Piccolo', 'Gohan', 'Krillin'];

/// Comma ignores the first element
const [, p2, p3] = characters;

console.log(p2, p3);

const returnArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = returnArray();

console.log(letters, numbers);


const state = (value) => {
    return [value, () => { console.log('Hello World') }];
}

const [names, setName] = state('Goku');

console.log(names);
setName();