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


