                                                                        //JavaScript Function Practice Set:-
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LEVEL 1: Function Basics ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// Q1. Simple Function
// function greet(){
//     console.log("Hello Kartik!");
// }
// greet()

//Q2. Function with Parameter
// function greet1(name){
//     console.log("Hello", name);
// }
// greet1("Kartik")

//Q3. Add Two Numbers
// function add(a,b){
//     return a+b
// }
// console.log(add(10,20))

//Q4. Square
// function square(a){
//     return a**2
// }
// console.log(square(10));

//Q5. Even or Odd
// function checkEvenOdd(a){
//     if( a%2==0){
//         return "yes its an even number!"
//     }
//     else{
//         return "Yes its an odd number!"
//     }
// }
// console.log(checkEvenOdd(19))


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LEVEL 2: Foundation of RETURN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
//Q6. Maximum of Two
// function larger(a,b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
// }
// console.log(larger(99,199));

// Q7. Positive / Negative / Zero
// function checkNum(a){
//     if(a>0){
//         return "Positive Number"
//     }else if(a<0){
//         return "Negative Number"
//     }else{
//         return "Its a ZERO!"
//     }
// }
// console.log(checkNum(-6969));

// Q8. Sum 1 to N
// function sum(a){
//     let sum = 0
//     for(let i=1; i<=a; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(sum(100));

// Q9. Count Even Numbers
// function countEven(a){
//     let count = 0
//     for(let i=1; i<=a; i++){
//         if(i%2==0){
//             count++
//         }
//     }
//     return count
// }
// console.log(countEven(5));

// Q10. Factorial
// function factorial(a){
//     let pro = 1
//     for(let i=2; i<=a; i++){
//         pro *= i
//     }
//     return pro
// }
// console.log(factorial(5));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LEVEL 3: Functions + Loops ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// Q11. Reverse a Number
// function revNum(a){
//     let rev = 0
//     while(a>0){
//         let rem = a%10
//         rev = rev*10 + rem
//         a = parseInt(a/10)
//     }
//     return rev
// }
// console.log(revNum(12345));

// Q12. Sum of Digits
// function sumDig(num){
//     let sum = 0
//     while(num>0){
//         let rem = num%10
//         sum += rem
//         num = parseInt(num/10)
//     }
//     return sum
// }
// console.log(sumDig(5832));

// Q13. Count Digits
// function countDig(num){
//     let count = 0
//     while(num>0){
//         let rem = num%10
//         count++
//         num = parseInt(num/10)
//     }
//     return count
// }
// console.log(countDig(58321));

// Q14. Prime Checker
// function isPrime(num){
//     let isPrime = true
//         if (num < 2) {
//             return `${num} is not a prime number`
//         }
//     for(let i=2; i<num; i++){
//         if(num%i==0){
//             isPrime = false
//             break
//         }
//     }
//     if(isPrime){
//         return `${num} is a prime number`
//     }else{
//         return `${num} is not a prime number`
//     }
// }
// console.log(isPrime(17))
// console.log(isPrime(18))
// console.log(isPrime(1));   
// console.log(isPrime(0));   
// console.log(isPrime(-5));  
// console.log(isPrime(2)); 

// Q15. Perfect Number:- Perfect number is a positive number that equals the sum of its proper divisior 
// function perfectNum(num){
//     let sum = 0
//     for(let i=1; i<num; i++){
//         if(num%i==0){
//             sum += i
//         }
//     }
// if(num == sum){
//     return `yes ${num} is a perfect number`
// }
// else{
//     return `no ${num} isn't a perfect number`
// }
// }
// console.log(perfectNum(6));
// console.log(perfectNum(10));


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LEVEL 4: Functions + Arrays ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
//Extra ques 1: Print and count the words containing "a".
// function alphaContain(arr){
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].includes("a")){
//             console.log(arr[i]);
//             count++
//         }
//     }
//     return count
// }
// console.log(alphaContain(["kartik", "love", "vihana"]));

//Extra ques 2: Make a copy of an array:-
// function copy(arr){
//     let arr2 = []
//     let count = 0
//     for(let i=0; i<arr.length; i++){
//         arr2[count] = arr[i]
//         count++
//     }
//     return {arr2, arr}

// }
// console.log(copy(["kartik", "love", "vihana"]));

// Q16. Array Sum
// function sumArr(arr){
//     let sum = 0
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum 
// }
// console.log(sumArr([10, 20, 30, 40]));

// Q17. Largest Element
// function largestEle(arr){
//     let largest = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// console.log(largestEle([-12, -7, -3, -16, 0, -5, -11]));

// Q18. Count Even Elements
// function countEven(arr){
//     let countEven = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2 == 0){
//             countEven++
//         }
//     }
//     return countEven
// }
// console.log(countEven([1, 2, 4, 7, 8, 11]));

// Q19. Reverse an Array
// function revArr(arr){
//     let revArr = []
//     let idx = 0
//     for(let i=0; i<arr.length; i++){
//         revArr[idx] = arr[arr.length-i-1]
//         idx++
//     }
//     return revArr
// }
// console.log(revArr([1, 2, 3, 4, 5]));

// Q20. Find Element
// function checkNumber(arr,x){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == x){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkNumber([10, 20, 30, 40], 10));

// Array Methods:
// 1.Push: add element at the end and returns the new length of the array
// let arr = [10,20,30,40,50]
// let b = arr.push(101)
// console.log(arr);
// console.log("Number of elements/ length of new array:-", b);

// 2. pop: remove element from the end and returns the removed element 
// let arr = [10,20,30,40,50]
// let a = arr.pop()
// console.log(arr);
// console.log("removed element:-", a);

// 3. shift(): removes the first element of the array and returns it 
// let arr = [10,20,30,40,50]
// let a = arr.shift()
// console.log(arr);
// console.log("removed element:-", a);

// 4. unshift(): add elements at the beginning of the Array and returns new length
// let arr = [10,20,30,40,50]
// let a = arr.unshift(101,102,103,104)
// console.log(arr);
// console.log(a);

// 5. slice(): returns the copy of the portion of and array without changing the original array, always return new array
// let arr = [10,20,30,40,50]
// let a = arr.slice(1, 4)
// console.log(arr);
// console.log(a);

// 6. splice(): used to remove, add, or replace Element in an array by modifying the original array
// let arr2 = [10,20,30,40,50]
// let b = arr2.splice(1, 4)
// console.log(arr2);
// console.log(b);
// to add an element to that array 
// let arr = [1,2,3,4,5]
// arr.splice(2,0,3)
// console.log(arr);

// 7. split():- converts a string into an array!
// let str = "Kartik Sahrawat Loves Vihana"
// let arr = str.split(" ")
// console.log(arr);
 
// 8. join():- converts an array to the string!
// let arr = ["Kartik", "Sahrawat", "Loves", "Vihana"]
// let str = arr.join(", -")
// console.log(str);

// 9. map():- map is used to transform every element of the array amd returns a new array 
// let mapArr = (arr) => {
//     return [
//         arr.map( n => n*2),
//         arr.map( n => n+5),
//         arr.map( n => n-5)
//     ]
// }
// console.log(mapArr([12, 3, 45, 2, 10]));
// k3b means ki jo map hai vo har ek element ke paas jata hai and usko condition ke according change krke ek new array me collect krdeta hai and original array ko untouched rakhta hai...

// 10. filter():- ye har element ke pass jaaega and usko just check krega according to condition and jo ele uss cond ko satisfy krega unko new array me collect krke return krega original array untouched rhegi...
// let filer = (arr) => {
//     return arr.filter( n => n>12)
// }
// console.log(filer([12, 3, 45, 2, 10]));

// 11. reduce():- array ke saare elements ko add krke ek single value return krta hai...
// let reduce = (arr) => {
//     return arr.reduce( (acc, current) => acc+current, -120)
// }
// console.log(reduce([12, 3, 45, 2, 10]));

/// 12. find():- return krta hai first element jo given condition ko satisfy krta hai...
// let arr = [10,20,31,40]
// let ans = arr.find(function(num){
//     return num%2!=0
// })
// console.log(ans);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LEVEL 4: Functions + Arrays Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
// Q21. Get Even Numbers
let evenNum = (arr) => {
    return arr.filter(n=>n%2==0)
}
// console.log(evenNum([1,2,3,4,5,6]));

// Q22. Get Squares
let square = (arr) => {
    return arr.map(n=>n**2)
}
// console.log(square([1,2,3,4,5]));    

// Q23. Sum of Even Numbers ~~~~~iss ques ko notebook me note krna hai ladle bhaii~~~~~
let sumEven =(arr)=>{
    return arr.filter(n=>n%2==0).reduce((a,b)=>a+b,0)
}
// console.log(sumEven([1,2,3,4,5,6]));

// Q24. Find First Number Greater Than 50
let greatNum = (arr)=>{
    return arr.filter(n=>n>50)
}
// console.log(greatNum([10, 25, 63, 72, 90])); // isme vo saare nos aajaenga jo condition pr satisfy krte hai but hume first ele chahiye tohh

let grtNum = (arr)=>{
    return arr.find(n=>n>50)
}
// console.log(grtNum([10, 25, 63, 72, 90]));

// Q25. HOF Challenge 
let add = (a,b) => a+b 
let multi = (a,b) => a*b
let calculate = (a,b,operation)=>{
    return operation(a,b)
}
// console.log(calculate(10,3, add));
// console.log(calculate(10,3, multi));
