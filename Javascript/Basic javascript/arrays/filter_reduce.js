

/// filter() method creates a new array with all elements that pass the test implemented by the provided function.

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = number.filter(num => num % 2 === 0)

console.log(number)
console.log(evenNumbers)

/// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbersReduce = [1, 2, 3, 4, 5]

const sumNumbers = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numbersReduce)
console.log(sumNumbers)

/// reduce case 2

const words = ['I', 'love', 'JavaScript', 'programming', 'JavaScript', 'programming', 'I']

const wordsRepeated = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] += 1
    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})


console.log(wordsRepeated)


