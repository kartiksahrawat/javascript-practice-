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

// ~~~~~~~~~~~~~~~~ Section B — Array Method Chaining ~~~~~~~~~~~~~~~~
// 9. Select all numbers greater than 5 and return their cubes.
// let selectCube = (arr) => arr.filter(n=> n>5).map(n=>n**3)
// console.log(selectCube([2, 6, 3, 8, 10, 4]));

// 10. Find all products priced between ₹100 and ₹500. Return only their names while maintaining the original order.
// let select = (arr) => arr.filter(n => n.price>=100 && n.price<=500).map(n=>n.name)
// console.log(select([
//   { name: "Pen", price: 20 },
//   { name: "Book", price: 250 },
//   { name: "Bag", price: 500 },
//   { name: "Desk", price: 900 }
// ]));

// 11. Select all even numbers, calculate the square of each number, and return their total sum.
// let select = (arr) => arr.filter(n => n%2==0).map(n=>n**2).reduce((a,b)=>a+b,0)
// console.log(select([1, 2, 3, 4, 5, 6]));

// 12. Return the three largest unique numbers in descending order.
// ----> This is the ...new Set method
// ----> Set ka main kaam, duplicate val hata dena and only unique store karna  
// const set = (arr) => {
//     return [...new Set(arr)]
//     .sort((a,b)=> b-a)
//     .slice(0,3)
// }
// console.log(set([12, 45, 45, 7, 88, 32, 88, 67]));

// ----> if Set ka use nhi krna only array methods ka use krna hai then:-
// let arrange = (arr) => {
//     return arr
//     .filter((a,b) => arr.indexOf(a)===b)
//     .sort((a,b)=>b-a)
//     .slice(0,3)
// }
// console.log(arrange([12, 45, 45, 7, 88, 32, 88, 67]));

// 13. Select all products whose price is ₹500 or more and calculate their combined price.
// let proPrice = (arr) => arr.filter(n=>n.price>=500).map(n=>n.price).reduce((a,b)=>a+b,0)
// console.log(proPrice([
//   { price: 200 },
//   { price: 700 },
//   { price: 500 },
//   { price: 1000 }
// ]));

// 14. Convert every word into uppercase and combine all words into a single string, separated by hyphens.
// let ArrToStr = (arr) => arr.join("-").toUpperCase()
// console.log(ArrToStr(["learn", "practice", "repeat"]));

// 15. Find all users who:- Are active (active: true) - Are older than 18 years.
// Return only their names, sorted alphabetically (A to Z)
// let sort = (arr) => arr.filter(n=>n.active && n.age>18).map(n=>n.name).sort()
// console.log(sort([
//   { name: "Zara", age: 21, active: true },
//   { name: "Aman", age: 17, active: true },
//   { name: "Neha", age: 25, active: false },
//   { name: "Riya", age: 22, active: true }
// ]));

// 16. Flatten the nested array completely, then return only numbers greater than 10.
// let flat = (arr)=> arr.flat(Infinity).filter(n=>n>10)
// console.log(flat([1, [12, 5], [20, [8, 15]]]));


// ~~~~~~~~~~~~~~~~ Section C — Output Prediction ~~~~~~~~~~~~~~~~
// Q17. Understanding map() and Original Arrays?
// const a = [1, 2, 3];
// const b = a.map(n => n + 1);
// console.log(a, b);
// ----> Right Predicition:- [ 1, 2, 3 ] [ 2, 3, 4 ]

// Q18. Understanding the Initial Value of reduce()
// console.log(
//   [2, 4, 6].reduce((sum, n) => sum + n, 10)
// );
// ----> Right Predicition:- 22

// Q19. Understanding find() When No Match Exists
// console.log(
//   [5, 10, 15].find(n => n > 20)
// );
// ----> Wrong Predicition:- false ~~ correct answer:- undefined

// Q20. Combining filter() and length
// console.log(
//   [1, 2, 3, 4].filter(n => n > 2).length
// );
// ----> Right Predicition:- 2

// Q21. Understanding sort() and Reference Equality
// const a = [3, 1, 2];
// const b = a.sort((x, y) => x - y);
// console.log(a === b);
// ----> Right Predicition:- false ~~ correct ans:- true hoga bcos jo sort hai vo original array ko modify krta hai and usi ko return bhi kar deta hai 

// 22. Combining slice() and join()
// console.log(
//     ["a", "b", "c"].slice(1).join("-")
// );
// ----> Right Predicition:- b- ~~ correct ans:- b-c

// Q23. Understanding Boolean Results from map()
// console.log(
//     [2, 3, 4].map(n => n > 2)
// );
// ----> Right Predicition:- [3,4] ~~ correct ans:- [ false, true, true ]

// Q24. Understanding some()
// console.log(
//   [1, 2, 3].some(n => n > 5)
// );
// ----> Right Predicition:- undefined ~~ correct ans:- false



