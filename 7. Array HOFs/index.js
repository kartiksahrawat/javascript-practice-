                                                                          // JavaScript Array HOFs
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 1 — Understand the Core ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1. `forEach()` — Print Elements
let print = (arr) => {
    arr.forEach(val => {
        console.log(val)
    })
}
// print([1, 2, 3, 4, 5])

// Q2. `map()` — Double Values
let doubledEle = (arr) => arr.map(n=>n*2)
// console.log(doubledEle([1, 2, 3, 4, 5]));

// Q3. `filter()` — Even Numbers
let evenEle = (arr) => arr.filter(n=>n%2==0)
// console.log(evenEle([1, 2, 3, 4, 5, 6, 7, 8]));

// Q4. `reduce()` — Sum
let reduceEle = (arr) => arr.reduce( (a, b) => a+b, 0 )
// console.log(reduceEle([10, 20, 30, 40]));

// Q5. `for...of` — Print Values
let forOF = (arr) => {
    for( let name of arr){
        console.log(name)
    }
}
// forOF(["Kartik", "Aastha", "Vihana"])


//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 2 — Individual HOF Mastery ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q6. `map()` — Squares
let squareEle = (arr) => arr.map( n => n**2)
// console.log(squareEle([1, 2, 3, 4, 5]));

// Q7. `filter()` — Greater Than 50
let greaterEle = (arr) => arr.filter(n => n>50)
// console.log(greaterEle( [20, 55, 10, 80, 45, 90]));

// Q8. `reduce()` — Find Maximum Number 
let sumEle = (arr) => arr.reduce((a,b) => a>b? a:b)
// console.log(sumEle([10, 45, 23, 89, 34, 919])); 

// Q9. `find()` — First Matching Element
let findEle = (arr) => arr.find( a => a>30)
// console.log(findEle([10, 25, 35, 60, 80]));

// Q10. `some()` vs `every()`
let checkEle = (arr) => {
    let a = arr.some(n=>n>50)
    let b = arr.every(n=>n>10)
    return [a, b]
}
// console.log(checkEle([20, 40, 60, 80]));



























































