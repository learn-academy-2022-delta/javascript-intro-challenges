// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)


//Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.pop())
groceryList.push("granola")
console.log(groceryList)


//Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0, 2))


//Write the code that will add "beans" to the "chips" and "dip" array.

let dippy = ["chips", "dip"]
let squishy = ["beans"]

console.log(dippy.concat(squishy))

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
//Write the code that will add the number 0 to the beginning of the array.
numbers.unshift(0)
console.log(numbers)

//Write the code that will add the number 12 to the end of the array.

numbers.push(12)
console.log(numbers)

//Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)


//Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

console.log(numbers.pop())
console.log(numbers.push(0))
numbers.sort((a, b)=> a - b)
console.log(numbers)

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
//Write the code that finds the index of the first appearance of the number 2.

console.log(numSet[0])

//Write the code that finds the index of the last appearance of the number 2.

console.log(numSet[5])

//Write the code that returns the number at the third index.

console.log(numSet[3])