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


//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 3 — Combination ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q11. `filter()` + `map()`
let evenSquare = (arr) => arr.filter( n => n%2==0 ).map( n => n**2)
// console.log(evenSquare([1, 2, 3, 4, 5, 6]));

// Q12. `filter()` + `reduce()`
let evenSum = (arr) => arr.filter( n => n%2==0 ).reduce((a,b) => a+b, 0)
// console.log(evenSum( [10, 15, 20, 25, 30]));


// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
// Some Practice Shitt:-
let users = [
    { name: "Aman", age: 17 },
    { name: "Kartik", age: 20 },
    { name: "Rohit", age: 22 },
    { name: "Rahul", age: 16 }
];
// Accessing Elements from this bad boyy:- 

// 1. Index se poora object access karna
// console.log(users[0], users[1], users[2], users[6]);

// 2. Index + property se specific value access karna
// console.log(users[1]["name"]);
// console.log(users[1]["age"]);
// console.log(users[1].name);
// console.log(users[1].age);

// 3. for loop se saare users access karna
for(let i=0; i<users.length; i++){
    // console.log(users[i].name, users[i].age);
}

// 4. for...of se access karna
for( let val of users){
    // console.log(val.name, val.age);
}

// 5. forEach() se access karna
users.forEach(val => {
    // console.log(val.name, val.age);
})

// 6. map() se names ka naya array banana
// console.log(users.map( n => n.name))
// console.log(users.map( n => n.age))

// 7. filter() se condition wale users nikalna
// console.log(users.filter(n => n.age>17));

// 8. find() se pehla matching user nikalna
// console.log(users.find(n => n.age<=21));

// x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-


// Q13. Objects + `filter()` + `map()`
let objectArr = (arr) => arr.filter(user => user.age>=18).map(user => user.name)
// console.log(objectArr([ 
    // { name: "Aman", age: 17 }, 
    // { name: "Kartik", age: 20 }, 
    // { name: "Rohit", age: 22 }, 
    // { name: "Rahul", age: 16 }
    // ]));
    
//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 4 — Real Problem Solving ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q14. Product Data Challenge
let electronicSorting = (arr) => arr.filter(n => n.category=="electronics").map( n => n.name)
// console.log(electronicSorting([
//     { name: "Laptop", price: 60000, category: "electronics" },
//     { name: "Phone", price: 30000, category: "electronics" },
//     { name: "Shoes", price: 3000, category: "fashion" },
//     { name: "Watch", price: 5000, category: "fashion" }
// ]));

    
    
    
    
    
    
















































