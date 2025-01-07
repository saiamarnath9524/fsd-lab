//Write a function mergeArrays that accepts any number of arrays as arguments and merges them into a single array. Use the spread operator to accomplish this

function mergeArrays(...arrays) {
    return [...arrays.flat()]
}

let array1 = [[1, 2],[3,4],[5,6]]
console.log(mergeArrays(array1))