

const person = {
    name: 'Daniel',
    lastName: 'Novillo',
    age: 27,
    address: {
        city: 'Quito',
        zip: 170525,
        lat: 14.234,
        lng: 12.323
    }
}

// console.table(person);
console.log(person);

/// to create a new object with the same properties of person
/// this avoids the reference to the same object
const person2 = { ...person };
person2.name = 'Peter';

console.log(person);
console.log(person2);