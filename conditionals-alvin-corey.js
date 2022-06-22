

// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Make sure you try different options and change the variables to ensure properly working code.
// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 56;
if(item <= 100) {
    console.log("in budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true;
if(hungry === true) {
    console.log("eat food")
} else {
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if(trafficLight === "green") {
    console.log("go")
} else if(trafficLight === "yellow") {
    console.log("slow down")
} else {
    console.log("stop")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var first = 100
var second = 7
if(first > second) {
    console.log(first)
} else if(first === second) {
    console.log("the numbers are the same")
} else {
    console.log(second)
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 3
if(number % 2 === 0) {
    console.log("even")
} else if(number % 2 === 1) {
    console.log("odd")
} else if(number === 0) {
    console.log("zero")
} else {
    console.log("not an odd, even, or zero")
}
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var percentage = 0
if(percentage === 100) {
    console.log("perfect score")
} else if(percentage >= 90 && percentage < 100) {
    console.log("Grade: A")
} else if(percentage >= 80 && percentage < 90) {
    console.log("Grade: B")
} else if(percentage >= 70 && percentage < 80) {
    console.log("Grade: C")
} else if(percentage >= 60 && percentage < 70) {
    console.log("Grade: D")
} else if(percentage > 0 && percentage < 60 ) {
    console.log("Grade: F")
} else if(percentage === 0) {
    console.log("no grade available")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var boolean = true
var number = 23
var string = "word"
console.log(typeof boolean)
console.log(typeof number)
console.log(typeof string)
// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user's password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "1234567890qwer!"
if(password.length >= 12 && password.includes("!")) {
    console.log("That is a mighty strong password!")
} else if(password.length >= 8 || password.includes("!")) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}