 // Write a function named marco that returns "polo".
 const marco = () => {
  return 'polo'
 }
console.log(marco())

// //Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
  return `welcome ${name}!`
}
console.log(greeting("alvin"))



// //Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// function: oddOrEven 
// paramater: number
// conditional: odd or even 

const oddOrEven = (num) => {
  if(num % 2 === 0 ) {
    return "even"
  } else{ 
    return "odd"
  }
} 
console.log(oddOrEven(4))


// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//function: triple 
// paramater: number 
//conditional: multiplied by 3 

const triple = (num) => {
 return num * 3 
}
console.log(triple(1))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
//function: multiply
// paramater: two numbers 
//conditional: multiplied 

const mult = (num1, num2) => {
  return num1 * num2 
}
console.log(mult(2, 8))





// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
//function: diviibleBy 
// paramater: two numbers 
// conditional: evenly divisible or not 

const divi = (num1, num2) => {
  if(num1 % num2 === 0) {
    return `${num1} evenly divisible by ${num2}`
  } else{
    return "not evenly divisible"
  }
}
console.log(divi(20,5))


// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.////