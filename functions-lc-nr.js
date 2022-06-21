// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco()) // polo

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `welcome, ${name}!`
}
console.log(greeting("leo")) // welcome leo!
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (nums) => {
    if(nums % 2 != 0) {
        return "the number is odd"
    } else if(nums) {
        return "the number is even"
    }
}
console.log(oddOrEven(15)) // "the number is odd"
console.log(oddOrEven(4)) // "the number is even"
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
 const triple = (num) => {
    return(num * 3)
 }
console.log(triple(5)) // 15
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (number1, number2) => {
    return(number1 * number2)
}
console.log(multiply(5, 2)) // 10
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    return `${num1} is evenly divisible by ${num2}` 
} 
console.log(divisibleBy(10,5)) // 10 is evenly divisble by 5


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (score) => {
    if(score <= 100 && score >= 90) {
        return `A`
    } else if(score >= 80 && score <= 89) {
        return `B`
    } else if(score >= 70 && score <= 79) {
        return `C`
    }
}
console.log(assignGrade(75))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = ("string1", "string2") => {
    if(string1.length() > string2.length()) {
        return `${string1}`
    } else if(string1.length() < string2.length()) {
        return `${string2}`
    }
}

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
const greaterNum = () => {
    if(greaterNum.max)
}

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.



