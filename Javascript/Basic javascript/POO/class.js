
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const person1 = new Person("Daniel", 27, { street: "Mercadillo", city: "EC" });
const person2 = new Person("Pedro", 30, { street: "LOJA", city: "CDMX" });

console.log(person1);
person1.greet();

console.log(person2);
person2.greet();