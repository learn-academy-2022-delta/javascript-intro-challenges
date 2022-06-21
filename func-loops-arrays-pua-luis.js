// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// var testArr1 = [3, 9, 15, 4, 10]
// --> [9, 27, 45, 12, 30]

var testArr1 = [3, 9, 15, 4, 10]

const triples = (array) => {
    let result = []
    for(let i=0; i < array.length; i++){
            result.push(array[i] * 3)
    }
return result
}
console.log(triples(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

var testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddNum = (array) => {
    let result = []
    for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 1){
            result.push(array[i]) 
        }
    }
    return result
}

console.log(oddNum(testArr2))

//Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

