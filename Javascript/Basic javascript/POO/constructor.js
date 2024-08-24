// const person = {
//     name: "Daniel",
//     age: 27,
//     address: {
//         street: "Mercadillo",
//         city: "CDMX",
//     },
//     greet() {
//         console.log(`Hi, my name  is ${person.name}`);
//     },
// };

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

const person1 = new Person("Daniel", 27, { street: "Mercadillo", city: "EC" });

console.log(person1);

const person2 = new Person("Pedro", 30, { street: "Mercadillo", city: "CDMX" });


Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}`);
}

person1.greet();
person2.greet();