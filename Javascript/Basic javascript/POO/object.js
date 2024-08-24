

/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos()
}

*/

const person = {
    name: "Daniel",
    age: 27,
    address: {
        street: "Mercadillo",
        city: "CDMX",
    },
    greet() {
        console.log(`Hi, my name  is ${person.name}`);
    },
};

console.log(person);
person.greet();


person.phone = "1234567890";

console.log(person.phone);

person.dismiss = function () {
    console.log("Goodbye");
}

person.dismiss();


delete person.phone;

console.log(person);