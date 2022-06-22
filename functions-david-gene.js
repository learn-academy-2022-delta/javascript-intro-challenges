// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting())
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (num) => {
    if (num % 2 === 0){
        return "even"
    } else if (num % 2 === 1){
        return "odd"
    }
}
console.log(oddOrEven(100001553))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (num) => {
    return (num * 3)
}
console.log(triple(7))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return (num1 * num2)
}
console.log(multiply(3, 3))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (firstNum, secondNum) => {
    if (firstNum % secondNum === 0){
        return `${firstNum} is evenly divisible by ${secondNum}`
    } else {
        return `${firstNum} IS NOT evenly divisible by ${secondNum}`
    }
}
console.log(divisibleBy(10, 5))
console.log(divisibleBy(10, 4))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// We need to take one arguement and return a Letter
// Conditional will use equal to or greater/less than


const assignGrade = (percentage) => {
    if (percentage >= 90){
        return "A"
    }else if (percentage >= 80){
        return "B"
    }else if (percentage >= 70){
        return "C"
    }else if (percentage <= 69){
        return "Needs to study harder!"
    }
}

console.log(assignGrade(54))
console.log(assignGrade(102))
console.log(assignGrade(88))
console.log(assignGrade(73))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// We can use abstraction for the strings.
// By using the length of the strings we can compare

const sentence = " This is a test"
const secSentence = " One of these is longer than the other"
const thirdSentence = " Only by a mile"

const isLonger = (firstString, secondString) => {
    if (firstString.length > secondString.length){
        return firstString
    } else if (firstString.length < secondString.length){
        return secondString
    } else if (firstString.length === secondString.length){
        return "Both strings have same amount of characters"
    }
}

console.log(isLonger(sentence,secSentence))
console.log(isLonger(sentence,thirdSentence))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (firstNum, secondNum) => {
    if (firstNum > secondNum){
        return firstNum
    }else if (firstNum < secondNum){
        return secondNum
    }else if (firstNum === secondNum){
        return `${firstNum} is equal to ${secondNum}`
    }
}

console.log(greaterNum(84,48))
console.log(greaterNum(84,84))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (loudNoises) => {
    return (loudNoises.toUpperCase())
}

console.log(yelling("i am usually very quiet"))