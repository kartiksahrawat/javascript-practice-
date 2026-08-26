//Q1. Print 1 to N. Take N from user.
// let N = Number(prompt("Enter a number: "));
// for (let i = 1; i <= N; i++) {
//     console.log(i);
// }

//Q2. Print N to 1. Take N from user.
// let n = Number(prompt("Enter a number: "));
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

//Q3. Print all even numbers from 1 to N. Take N from user.
// let N = Number(prompt("Enter a number: "));
// for (let i = 2; i <= N; i += 2) {
//     console.log(i);
// }

//Q4. Print all odd numbers from 1 to N. Take N from user.
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= n; i += 2) {
//     console.log(i);
// }

//Q5. Multiplication Table( user se input lo kis ka table likhna hai)
// let n = Number(prompt("Enter a number: "));
// for (let i = 1; i <= 10; i++) {
//     console.log(i*n);
// }

//Q6. Sum 1 to N
// let n = Number(prompt("Enter a number: "));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum = sum+i;
// }
// console.log(sum);

//Q7. Count Even Numbers 1 to n.
// let n = Number(prompt("Enter a number: "));
// let count = 0;
// for (let i=2; i<=n; i+=2){
//     count++;
// }
// console.log(count);

//Q8. Sum of Even Numbers 1 to n
// let n= Number(prompt("Enter a number: "));
// let sum = 0;
// for (let i=2; i<=n; i+=2){
//     sum = sum + i;
// }
// console.log(sum);

// Q9. Count Numbers Divisible by 3 1 to n
// let n = Number(prompt("Enter a number: "));
// let count = 0;
// for (let i=1; i<=n; i++){
//     if(i%3==0){
//         count++;
//     }
// }
// console.log(count);

//Q10. Find the Largest Number(user kuch nos dega) also smallest 

//Q11. Count Positive, Negative and Zero (User se N numbers lo.)
// let n = Number(prompt("how many nos"));
// let pos = 0;
// let neg = 0;
// let zero = 0;
// for(let i=0; i<n; i++){
//     let num = Number(prompt("Enter a number: "));
//     if(num>0){
//         pos++
//     }else if(num<0){
//         neg++
//     }else if(num == 0){
//         zero++
//     }
// }
// console.log(pos);
// console.log(neg);
// console.log(zero);

//Q12. Reverse a Number
// let num = 789
// let rev = 0
// while(num > 0){
//     let rem = num % 10
//     rev = rev*10 + rem 
//     num = parseInt(num/10)
// }
// console.log(rev)

//Q. Print the no of digits in a number
// let num = 5786
// while(num > 0){
//     let rem = num % 10
//     console.log(rem)
//     num = parseInt(num/10)
// }

//Q. Print the no of digits in a number but left to right 
// let num = 5786
// let str = String(num)
// for(let i= 0; i < str.length; i++){
//     console.log(str[i])
// }

//Q13. Sum of Digits
// let num = 123
// let sum = 0
// while(num>0){
//     let rem = num%10 
//     sum += rem
//     num = parseInt(num/10)
// }
// console.log(sum);

//Q14. Count the no of digits in a number 
// let num = 5827
// let count = 0
// while(num > 0 ){
//     let rem = num%10 
//     count++
//     num = parseInt(num/10)
// }
// console.log(count)

// Q15. Check Palindrome Number
// let num = 8008
// let org = 8008
// let rev = 0
// while(num>0){
//     let rem = num%10
//     rev = rev*10+rem
//     num = parseInt(num/10)
// }
// console.log(rev)
// if(org === rev){
//     console.log(`Yes ${org} is a Palinfrome Number`)
// }else{
//     console.log("Not a Palindrome")
// }
    
// Q16. Factorial
// let num = 5
// let pro = 1
// for(let i=num; i>0; i--){
//     pro *= i
// }
// console.log(pro);

// Q17. Print Factors
// let num = 12
// for(let i=1; i<=num; i++){
//     if(num%i == 0){
//         console.log(i)
//     }
// }

//Q18. Count Factors
// let num = 12
// let count = 0
// for(let i=1; i<=num; i++){
//     if(num%i == 0){
//         count++
//     }
// }
// console.log(count);

//Q19. Prime Number
// let num = 4
// for(let i=1; i<=num; i++){
//     if(num%1==0 && num%num==0){
//         console.log(`yes ${num} is a prime no`);
//     }
// }------- worong solution 
// let num = Number(prompt('enter ur nu-'))
// let isprime = true
// for(let i=2; i<num; i++){
//     if(num%i==0){
//         isprime = false
//         break
//     }
// }
// if(isprime){
//     console.log(`yes ${num} is a prime no`);
// }else{
//     console.log(`no ${num} is not a prime no`);
// }

// Q20. Print Prime Numbers 1 to N (n user se lo)
// let n = Number(prompt("Enter N:"));
// for(let num = 2; num <= n; num++){
//     let isPrime = true;
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(num);
//     }
// }










