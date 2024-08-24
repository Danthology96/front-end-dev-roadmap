
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

/// starts from the end
console.log(animals.slice(-2))
// expected output: Array ["duck", "elephant"]

/// starts from the end and ends before the last element
console.log(animals.slice(2, -1))
console.log(animals.slice())
console.log(animals.slice(-2))
console.log(animals.slice(2, -1))
console.log(animals.slice())