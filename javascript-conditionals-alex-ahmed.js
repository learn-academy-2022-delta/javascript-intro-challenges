// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100 
if(item === 100){
  console.log("in budget")
}



//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = "hungry"
if(hungry === "hungry") {
  console.log("eat food")
} else{
  console.log("keep coding")
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficlight = "yellow"
if(trafficlight === "green") {
  console.log("go")
} else if(trafficlight === "yellow"){
  console.log("slow down")
}else if(trafficlight === "red"){
  console.log("stoppppp")
}

//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 15
var num2 = 15
if(num1 < num2){
  console.log(num2)
}else if(num1 > num2){
  console.log(num1)
} else if(num1 === num2){
  console.log("numbers are the same")
}

//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num3 = 6
if(num3 === 0){
  console.log("number is zero")
} else if(num3 % 2 === 0){
  console.log("number is even")
}else if(num3 % 2 === 1){
  console.log("number is odd")
}






//STRETCH Challenges

//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var percent = 0
if(percent === 100){
  console.log("perfect score")
} else if(percent > 90 && percent < 100){
  console.log("A")
} else if(percent > 80 && percent < 90){
  console.log("B")
} else if (percent >70 && percent<80){
  console.log("C")
} else if(percent < 70 && percent > 60){
  console.log("D")
} else if(percent < 60 && percent > 0){
  console.log("F")
} else if( percent === 0 ){
  console.log("no grade available")
}

//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

//Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.