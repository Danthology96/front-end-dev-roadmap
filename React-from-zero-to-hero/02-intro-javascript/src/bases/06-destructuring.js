/// Destrucuring

const person = {
    name: 'John',
    age: 30,
    password: 'New York',
    range: "Soldier"
}

// const { name, age, password } = person;

// console.log(name);
// console.log(age);
// console.log(password);

const context = ({ name, age, range = "Captain", password }) => {
    // console.log(name, age, range);

    return {
        passwordName: password,
        years: age,
        latlng: {
            lat: 14.123,
            lng: -12.323
        }
    }
};

const { passwordName, years, latlng: { lat, lng } } = context(person);
console.log(passwordName, years);

/// Destructuring into an object
console.log(lat, lng);

