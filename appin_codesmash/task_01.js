// Merge two sorted Linked Lists

// Using array

let array_1 = [4,1,3,2]
let array_2 = [8,6,7,5]

let sortedArray_1 = array_1.sort()
console.log("sortedArray_1:", sortedArray_1);

let sortedArray_2 = array_2.sort()
console.log("sortedArray_2:", sortedArray_2);


let mergedArray = sortedArray_1.concat(sortedArray_2)
console.log("Mergedarray - ", mergedArray);

// o/p: 
// sortedArray_1: [ 1, 2, 3, 4 ]
// sortedArray_2: [ 5, 6, 7, 8 ]
// Mergedarray -  [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]