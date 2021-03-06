// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}
console.log(marco())
// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}!`
  }
  console.log(greeting("Luis"))
  console.log(greeting("Jojo"))
 
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (num) => {
    if (num % 2 == 0) {
        return "even"
    } 
    else (num % 2 == 1) 
        return "odd"
}

console.log(oddOrEven("4"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (num) => {
    return num * 3
  }
  
  console.log(triple(3))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiplier = (num1, num2) => {
    return num1 * num2
  }
  
  console.log(multiplier(5, 67))
 

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (num1, num2) => {
     if (num1 / num2 % 2 == 0) {
         return "is evenly divisible"
     }
  }
  
 console.log(divisibleBy(11, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

function assignGrade(score) {
    if (score > 90) {
        return 'A'
    } else if (score > 80) {
        return 'B'
    } else if (score > 70) {
        return 'C'
    } else if (score > 65) {
        return 'D'
    } else {
        return 'F'
    }
}

console.log("You got a " + assignGrade(95))
console.log("You got a " + assignGrade(65))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat")
// // expected output: "5 cats"

// pluralizer(1, "dog")
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

