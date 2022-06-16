var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.
var newItem = ["granola"]
console.log(groceryList.concat(newItem))
// Write the code that will return a subset of the array containing only "chips" and "dip".
let newList = groceryList.slice(0, 2)
console.log(newList)
// Write the code that will add "beans" to the "chips" and "dip" array.
newList.push("beans")
console.log(newList)

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
numbers.push(12)
console.log(numbers)
// Write the code that will remove the first number from the array.
numbers.shift()
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
let otherNumber = [0]
let newNumberList = otherNumber.concat(numbers)
newNumberList.pop()
console.log(newNumberList)

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log(numSet[2])

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join())
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))
// Create two arrays consisting of three first names of your cohort members in each.
var array1 = ["Corey", "David", "Leo"]
var array2 = ["Luis", "Nicole", "Alvin"]

// Write the code that sorts the names in alphabetical order.
console.log(array1.sort(), array2.sort())

// Write the code that sorts the names in reverse alphabetical order.
var reverseArray1 = array1.reverse()
var reverseArray2 = array2.reverse()
console.log(reverseArray1, reverseArray2)
// Write the code that sorts all the names in alphabetical order in a single array.

var newArray = array1.concat(array2)
console.log(newArray.sort())

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
// Write the code that logs the values from the numbers array that are at odd indexes.
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 ==0){
    numbers.pop(i)
    }
}

console.log(numbers)
// Write the code that adds the values from odd indexes into the oddIndexes array.
for (var i = 0; i < numbers.length; i++){
    if(i % 2 !== 0){
       console.log(numbers[i])
    }
}
// Write the code that adds the values from odd indexes into the oddIndexes array.

for (var i = 0; i < numbers.length; i++){
    if(i % 2 !== 0){
       console.log(numbers[i])
    }
}
// Write the code that adds the values from odd indexes into the oddIndexes array.

for (var i = 0; i < numbers.length; i++){
    if(i % 2 !== 0){
       oddIndexes.push(numbers[i])
    }
}
console.log(oddIndexes)


// Create a for loop that logs each number from 1 - 20.

// Create a for loop that logs every other number from 1 - 20.

// Create a for loop that logs the result of each number from 1 - 20 tripled.

// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

