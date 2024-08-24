class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }

    reproduceSound() {
        console.log('Generic animal sound.')
    }
}

class Dog extends Animal {
    constructor(name, type, breed) {
        super(name, type)
        this.breed = breed
    }

    reproduceSound() {
        console.log('Guau guau')
    }

    run() {
        console.log(`${this.name} running`);
    }
}

const dog = new Dog('Firulais', 'Dog', 'Pug')

console.log(dog)
dog.reproduceSound()
dog.run()

dog.newMethod = () => {
    console.log('New method')
}

dog.newMethod()
Dog.prototype.secondMethod = () => {
    console.log('Second method')
}
dog.secondMethod()