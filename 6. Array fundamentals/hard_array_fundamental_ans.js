// ~~~~~~~~~~~~~~~~ Section A: Individual Array Methods ~~~~~~~~~~~~~~~~
// 1. Add 60 and 70 to the end of the given array.
// let nums = [10, 20, 30, 40, 50];
// let numsCopy = [...nums]
// numsCopy.push(60, 70)
// console.log(nums);
// console.log(numsCopy);

// 2. Remove the first element from the array and store the removed value in a separate variable.
// let colors = ["red", "blue", "green"];
// let removedEle = colors.shift()
// console.log(removedEle);

// 3. Extract the middle three elements from the array. The original array must remain unchanged
// let nums = [10, 20, 30, 40, 50, 60, 70];
// let res = nums.slice(2,5)
// console.log(res);

// 4. Check whether every number in the array is greater than zero. Return a boolean value.
// let check = (arr)=> arr.every(n=> n>0)
// console.log(check([4, 7, 12, 3, 9]));

// 5. Find the first number that is greater than 100.
// let find = (arr) => arr.find(n => n>100)
// console.log(find([20, 80, 120, 150, 40]));

// 6. Return the indexes of all numbers that are divisible by 3.
// ------> ye hai chutiya way :|
// const arr = [3, 5, 6, 8, 9, 10];
// for(let val in arr){
//     if(arr[val]%3==0){
//         console.log(val);
//     }
// }
// ------> ye hai smart way :)
// let check = (arr) => arr.map((val, idx) => val%3==0? idx:-1).filter(idx => idx != -1)
// console.log(check([3, 5, 6, 8, 9, 10]));

// 7. Calculate and return the sum of all numbers in the array.
// let sumEle = (arr)=> arr.reduce((a,b)=>a+b,0)
// console.log(sumEle([15, 25, 35, 45]));

// 8. Sort the numbers in descending order. Store the sorted result in a new array
// let sortDes = (arr)=> arr.sort((a,b) => b-a).map(n=>n)
// console.log(sortDes([12, 5, 100, 40, 8]));


