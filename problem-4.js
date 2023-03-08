/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */

const max2Arr = (arr1,arr2)=>{
    const newArr = [...arr1,...arr2]
    const max = Math.max(...newArr)
    return max
}

console.log(max2Arr([1,2,3,4,5],[11,12,13,14,15]));