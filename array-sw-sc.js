// Consider the variable: var groceryList = ["chips", "dip", "cookies"]

// 1 - Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips","dips","cookies"]
  groceryList.push ("soda")
  console.log (groceryList)
  // Output: ['chips', 'dips', 'cookies', 'soda']

// 2 - Write the code that will add "granola" to the end of array without altering the original array.
console.log (groceryList.pop ("soda"))
console.log (groceryList)

var groceryList = ["chips","dips","cookies"]
  groceryList.push ("granola")
  console.log (groceryList)
// Output:
// ['chips', 'dips', 'cookies']
// ['chips', 'dips', 'cookies', 'granola']

// 3 - Write the code that will return a subset of the array containing only "chips" and "dip".

console.log (groceryList.pop("granola"))
console.log (groceryList)

console.log (groceryList.pop("cookies"))
console.log (groceryList)
//Output: [ 'chips', 'dips' ]

//4 - Write the code that will add "beans" to the "chips" and "dip" array.
groceryList.unshift ("beans")
console.log (groceryList)
//Output: [ 'beans', 'chips', 'dips' ]

//Consider the variable: var numbers = [2, 4, 6, 8, 10]


// 5 - Write the code that will add the number 0 to the beginning of the array.


// 6 - Write the code that will add the number 12 to the end of the array.


// 7 - Write the code that will remove the first number from the array.


// 8 - Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
