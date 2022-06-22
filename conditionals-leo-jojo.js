/*
Write the code that will log the outcome of 34 added to 71.
Write the code that will log the outcome of 67 subtracted from 123.
Write the code that will log the outcome of 56 multiplied by 23.
Write the code that will log the outcome of 45 divided by 5.
Write the code that will log the outcome of 5 to the power of 7.
Write the code that will log the whole number remainder of 33 divided by 6.
Write the code that will log the length of a string containing your name.
Write the code that will log whether your string includes the letter "e"?
Write the code that will log the character at the first index of the string.
Write the code that will log the string in all uppercase letters.*/
console.log(34 + 71) // 105
console.log(123 - 67) // 56
console.log(56 * 23) // 1288
console.log(45 / 5) // 9
console.log(5**7) // 7825
console.log(33 % 6) // 3
var myName = "Leo"
    console.log(myName.length) // 3
console.log(myName.includes("e")) // true
console.log(myName[0]) // L
console.log(myName.charAt(2)) // o
console.log(myName.toUpperCase()) // Leo

/* 
Write the code that will log true or false for the following:

Is 34 divided by 3 greater than 67 divided by 2?
Does 5 evaluate to the same as "5"?
Does 5 strictly equal "5"?
Does !3 strictly equal 3?
Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
Does "LEARN" contain the subset "RN"?
Does "LEARN" contain the subset "rn"?
Does "LEARN"[0] strictly equal "l"?
Modify the code from the previous question to return true. */

console.log(34 / 3 > 67 / 2) // false
console.log(5 == "5") // true
console.log(5 === "5") // false
console.log(!3 === 3) // false
var learn = "learn"
var student = "student"
console.log(learn.length === 5 , student.length === 7) // true true
console.log(learn.length === 5 && student.length === 10) // false
console.log(learn.includes("RN")) // false
console.log(learn.includes("rn")) // true
console.log(learn[0]) // l
console.log(learn[0] === "l") // true

/*Consider the variables:

var theQuestion = "life, the universe, and everything"
var theAnswer = 42
Write the code that will log theAnswer divided by 2.
Write the code that will log the length of theQuestion.
Write the code that will log the index of the character "f" in the theQuestion.
Write the code that will log the concatenation of the two variables.
Write the code that will log "the universe".
Write the code that will log the character "l" from theQuestion.
Write the code that will log whether theQuestion.length is greater than theAnswer.*/

var theQuestion = "life, the universe, and everything"
var theAnswer = 42
console.log(theAnswer / 2) // 21
console.log(theQuestion.length) // 34
console.log(theQuestion.indexOf("f")) // 2 (indexOf)
console.log(theQuestion.length > theAnswer.length) // false

/*
Make sure you try different options and change the variables to ensure properly working code.
Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
STRETCH Challenges
Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input. */
var item = "50"
if(item <= 100) {
    console.log("in budget")
} // in budget
var hungry = "true"
if(hungry === "true") {
    console.log("eat food")
} else {
    console.log("keep coding")
}
// eat food
var color = "red"
if(color === "red") {
      console.log("stop")
    } else if (color === "yellow") {
      console.log("slow down")
    } else if (color === "green") {
      console.log("go")
    } // "stop"