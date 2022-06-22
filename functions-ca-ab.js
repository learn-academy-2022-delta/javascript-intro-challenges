// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}
console.log(marco())


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return "Welcome " + name
}

console.log(greeting("Alex"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => { 
    if (number % 2 === 0) {
        return "Even"
    } else {
        return "Odd"
    }

}

console.log(oddOrEven(5))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = ( number ) => {
    return number * 3
}

console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (number1, number2) => {
    return number1 * number2
}

console.log(multiply(3,4))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (a, b) => {
    if ((a % b) === 0) {
        return "is divisible"
    } else {
        return "is not divisible"
    }
}

console.log(divisibleBy(10,5 ))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) => {
    if (score <= 100 && score >= 90) {
        return "A"
    } else if (score <= 89 && score >= 80 ) {
        return "B"
    } else if (score <= 79 && score >= 70 ) {
        return "C"
    } else if (score <= 69 && score >= 60 ) {
        return "D"
    } else if (score < 60 && score >= 0 ) {
        return "F"
    } else {
        return "Invalid Grade"
    }
}

console.log(assignGrade(100))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1 + " has more characters."
    } else {
        return string2 + " has more characters."
    }
}
console.log(isLonger("Hello", "Goodbye"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.


const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return num1 + " is greater than " + num2
    } else {
        return num2 + " is greater than " + num1
    }
}

console.log(greaterNum(7,8))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (word) => {
    return word.toUpperCase()
}

console.log(yelling("hello"))

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

let en = "Hello World!"
let es = "Hola Mundo!"
let de = "Hallo Welt!"
let fr = "Bonjour le monde!"
let da = "Hej Verden!"

const helloWorld = (language) => { 
    if (language === en || language === es || language === de || language === fr || language === da ) {
        return language
    } else {
        return en
    }
}

console.log(helloWorld(da))

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.



// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

const pluralizer = (num, noun) => {

    if ( noun === "child" && num > 1) {
        return num + " Children"
    }else if (noun === "child" && num === 1){
        return num + " child"
    }
    
    else if ( noun === "sheep" && num >= 1) {
        return num + " sheep"
    }
    
    else if ( noun === "goose" && num > 1) {
        return num + " geese"
    }else if (noun === "goose" && num === 1){
        return num + " goose"
    }
    
    else if ( noun === "person" && num > 1) {
        return num + " people"
    }else if (noun === "person" && num === 1){
        return num + " person"
    }
    
    else if ( noun === "species" && num >= 1) {
        return num + " species"
    }
    
    
    else if (num > 1 ) {
        return num + " " + noun + "'s"
    } else {
        return num + " " + noun 
    } 
}

console.log(pluralizer(1, "child"))


