// Question 1 — Electricity Bill
// let units = Number(prompt("Enter units consumed:-"))
// let bill;
// if(units<=100){
//     console.log('bill:-',bill= units*5);
//     if(bill>=3000){
//         console.log("Discount:-", bill*0.1);
        
//         console.log("Final Bill:-", bill-(bill*0.1))
//     }
    
// }else if(units<=200){
//     console.log('bill:-',bill= units*7);
//     if(bill>=3000){
//         console.log("Discount:-", bill*0.1);
        
//         console.log("Final Bill:-", bill-(bill*0.1))
//     }
    
// }else if(units<=500){
//     console.log('bill:-',bill= units*10);
//     if(bill>=3000){
//         console.log("Discount:-", bill*0.1);
        
//         console.log("Final Bill:-", bill-(bill*0.1))
//     }
    
// }else if(units>=501){
//     console.log('bill:-',bill= units*15);
//     if(bill>=3000){
//         console.log("Discount:-", bill*0.1);
//         console.log("Final Bill:-", bill-(bill*0.1))
//     }
// }

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-
    
// 💻 Question 2 — Bank Loan Eligibility
// let age = Number(prompt('Enter your age:-'))
// let salary = Number(prompt('Enter your Monthly Salary:-'))
// let score = Number(prompt('Enter your Credit Score:-'))

// if(age>=21){
//     if(salary>=30000){
//         if(score>=750){
//             console.log("Eligible to Premium Load");
            
//         }else if(score>=650){
//             console.log("Eligible to Standard Load");

//         }else{
//             console.log("Loan Rejected");
//         }
        
//     }else{
//         console.log("Loan Rejected");
//     }
// }else{
//     console.log("Loan Rejected");
// }

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 3 — Movie Ticket Booking
// let age = Number(prompt("Enter ur age-"))
// let day = prompt("Enter day prefrence:-")
// let vip = confirm("Are you a VIP Memeber?")
// let price;

// if(age>=60){
//     price= 120
// }else if(age>=13){
//     price = 200
// }else {
//     price = 100
// }

// if(day == "weekend"){
//     console.log("Base Price:", price);
//     console.log("weekend subcharges:-", 50)
//     console.log("Final Price:-", price+=50);
// }else{
//     console.log("Final Price:", price);
// }

// if(vip){
//     console.log("Discount:-", 30)
//     console.log("Final Price:-", price-=30);
// } else{
//     console.log("Final Price:-", price); 
// }

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 4 — Employee Bonus
// let exp = Number(prompt("Enter ur exp:-"))
// let rate = Number(prompt("Enter ur perfo rating:-"))

// if(exp<2){
//     console.log("No Bonus!");
    
// }else if(exp >=2 && exp <= 5){
//     if(rate>=4){
//         console.log("Bonus Amount:", 10000);
//     }else{
//         console.log("Bonus Amount:", 5000);
//     }
// }else if(exp > 5){
//     if(rate == 5){
//         console.log("Bonus Amount:", 25000);
//     }else if(rate == 4){
//         console.log("Bonus Amount:", 18000);
//     }else {
//         console.log("Bonus Amount:", 12000);
//     }
// }

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 5 — Cab Booking (Advanced Version)
// let pass = Number(prompt("Enter no of pass:-"))
// let dist = Number(prompt("Enter dist covered:-"))
// let peak = confirm("Are you travelling in peak hour?")
// let lux = confirm("Do you prefer luxury ride?")
// let fare;

// if(pass <= 2){
//     console.log("Car Type:- Mini"); 
//     fare = dist*10
// }else if(pass <= 4){
//     console.log("Car Type:- Sedan");
//     fare = dist*15
// }else if(pass <= 6){
//     console.log("Car Type:- SUV");
//     fare = dist*20
// }else {
//     console.log("Car NOT Available!");
// }
// console.log("Base Fare:-", fare);

// if(peak){
//     console.log("Extra charges for peak hr.:-", 100);
//     fare +=100
// }

// if(lux){
//     console.log("Luxury Extra Charges:-", fare*0.2)
//     fare += fare * 0.2
    
// }
// console.log("Final Fare:-", fare)

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 6 — Student Scholarship
// let marks = Number(prompt("Enter ur marks:-"))
// let income = Number(prompt("Enter ur family income:-"))
// let sp = confirm("Are you a sports person/ sports quota?")
// if(marks>=90 && income<500000){
//     console.log("Scholarship availed-", '100%');
// }else if(marks>=80 && income<800000){
//     console.log("Scholarship availed-", '50%');
// }else if(sp){
//     console.log("Scholarship availed-", '25%');
// }else{
//     console.log("Not applicable for scholarship");
// }

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

//💻 Question 7 — Hotel Booking
// let days = Number(prompt("Enter no of days:-"))
// let room = prompt("Enter room type:- \n1. Standard\n2. Deluxe\n3. Suite")
// let rate;

// if(room == "Standard"){
//     rate = days*2000
// }else if(room == "Deluxe"){
//     rate = days*3500
// }else if(room == "Suite"){
//     rate = days*6000
// }
// console.log("Base Rate--", rate)

// if(days>5){
//     if(room == "Standard"){
//         console.log("Dis--", rate*0.05);
//         rate -= rate*0.05
//     }else if(room == "Deluxe"){
//         console.log("Dis--", rate*0.1);
//         rate -= rate*0.1
//     }else if(room == "Suite"){
//         console.log("Dis--", rate*0.15);
//         rate -= rate*0.15
//     }
// }
// console.log("Final Rate--", rate)

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 8 — Online Shopping
// let cart = Number(prompt("Enter cart value:-"))
// let prime = confirm("Are you a prime member?")

// if(cart>=5000){
//     console.log("Cart value-", cart);
//     console.log("Discount:-", cart*0.2);
//     cart -= cart*0.2
// }else if(cart>=3000){
//     console.log("Cart value-", cart);
//     console.log("Discount:-", cart*0.1);
//     cart -= cart*0.1
// }else if(cart>=1000){
//     console.log("Cart value-", cart);
//     console.log("Discount:-", cart*0.05);
//     cart -= cart*0.05
// }else{
//     console.log("Cart value-", cart);
//     console.log("No discount applicable");
//     cart = cart
// }
// console.log("Base Cart Value:-", cart)
// if(prime){
//     console.log("Prime Discount:-", cart*0.05);
//     cart -= cart*0.05
// }
// if(cart>2000){
//     console.log("Free Shipping");
// }else{
//     console.log("Shipping Charges:-", 100);
//     cart += 100
// }   
// console.log("Final Cart Value:-", cart)

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// 💻 Question 9 — Fitness Membership
// let age = Number(prompt("Enter ur age:-"))  
// let std = confirm("Are you a student?")
// let mem = prompt("Enter membership type:- \n1. Basic\n2. Premium\n3. Elite")
// let fee;
// if(mem == "Basic"){
//     fee = 1000
// }else if(mem == "Premium"){
//     fee = 2000
// }else if(mem == "Elite"){
//     fee = 3500
// }
// console.log("Fee:-", fee)
// if(std){
//     console.log("Student Discount:-", fee*0.15);
//     fee -= fee*0.15
// }
// if(age>60){
//     console.log("Senior Citizen Discount:-", fee*0.2);
//     fee -= fee*0.2
// }
// console.log("Final Fee:-", fee)

// -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-

// // 💻 Question 10 — 💻 Question 10 — University Admission (🔥 Hardest)
// let pcm = Number(prompt("Enter ur PCM percentage:-"))
// let ee = Number(prompt("Enter ur Entrance Exam marks:-"))
// let sports = confirm("Are you a sports person/ sports quota?")
// let inc = Number(prompt("Enter ur family income:-"))

// if(pcm>=75){
//     if(ee>=90){
//         console.log("Direct Admission");
//         if(inc<400000){
//             console.log("Scholarship availed:-", '50%');
//         }    
//     }else if(ee>=80){
//         console.log("Counselling Required");
//     }else if(ee<80){
//         if(ee>=70){
//             if(sports){
//                 console.log("Counselling Required");
//             }else{
//                 console.log("Admission Rejected");
//             }
//         }else{
//             console.log("Admission Rejected");
//         }    
//     }
// }else{
//     console.log("Admission Rejected");
// }

// ***************** Some Extra questions *****************

// Q1.
// let num = Number(prompt("Enter a number:-"))
// if(num>0){
//     console.log("Positive Number");
// }else if(num<0){
//     console.log("Negative Number");
// }else{
//     console.log("Zero");
// }

// Q2.
// let num = Number(prompt("Enter a number:-"))
// if(num%2==0){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// }

// Q3.
// let num1 = Number(prompt("Enter 1st number:-"))
// let num2 = Number(prompt("Enter 2nd number:-"))
// let num3 = Number(prompt("Enter 3rd number:-"))
// if(num1>num2 && num1>num3){
//     console.log("Largest Number:-", num1);
// }else if(num2>num1 && num2>num3){
//     console.log("Largest Number:-", num2);
// }else if(num3>num1 && num3>num2){
//     console.log("Largest Number:-", num3);
// }

// Q4.
// let num1 = Number(prompt("Enter 1st number:-"))
// let num2 = Number(prompt("Enter 2nd number:-"))
// let num3 = Number(prompt("Enter 3rd number:-"))
// if(num1<num2 && num1<num3){
//     console.log("Smallest Number:-", num1);
// }else if(num2<num1 && num2<num3){
//     console.log("Smallest Number:-", num2);
// }else if(num3<num1 && num3<num2){
//     console.log("Smallest Number:-", num3);
// }

// Q5.
// let year = Number(prompt("Enter a year:-"))
// if(year%4==0){
//     console.log("Leap Year");
// }else{
//     console.log("Not a Leap Year");
// }

// Q6.
// let age = Number(prompt("Enter ur age:-"))
// if(age>=18){
//     console.log("Eligible to vote");
// }else{
//     console.log("Not Eligible to vote");
// }

// Q7.
// let num = Number(prompt("Enter a number:-"))
// if(num%3==0 && num%5==0){
//     console.log("Divisible by both 3 and 5");
// }else if(num%3==0){
//     console.log("Divisible by 3");
// }else if(num%5==0){
//     console.log("Divisible by 5");
// }else{
//     console.log("Not Divisible by 3 or 5");
// }

// Q8.
// let marks = Number(prompt("Enter ur marks:-"))
// if(marks>=90){
//     console.log("Grade:- A");
// }else if(marks>=80){
//     console.log("Grade:- B");
// }else if(marks>=70){
//     console.log("Grade:- C");
// }else if(marks>=60){
//     console.log("Grade:- D");
// }else{
//     console.log("Grade:- F");
// }

// Q9.
// let attendance = Number(prompt("Enter ur attendance percentage:-"))
// let isFeePaid = true
// if(attendance>=75 && isFeePaid){
//     console.log("Eligible to appear for exam");
// }else{
//     console.log("Not Eligible to appear for exam");
// }

// Q10.
// let username = "admin"
// let password = "12345"
// if(username == "admin" && password == "12345"){
//     console.log("Login Successful");
// }else{
//     console.log("Login Failed");
// }

//Q11.
// let amount = Number(prompt("Enter amount:-"))
// if(amount>=5000){
//     console.log("Discount:-", amount*0.2);
//     amount -= amount*0.2
// }else if(amount>=3000){
//     console.log("Discount:-", amount*0.15);
//     amount -= amount*0.15
// }else if(amount>=1000){
//     console.log("Discount:-", amount*0.1);
//     amount -= amount*0.1
// }else{
//     console.log("No Discount Applicable");
// }
// console.log("Final Amount:-", amount)

//Q12.
// let age = Number(prompt("Enter ur age:-"))
// if(age>=60){
//     console.log("senior citizen");
// }else if(age>=20){
//     console.log("adult");
// }else if(age>=13){
//     console.log("teenager");
// }else if(age>=0){
//     console.log("child");
// }

//Q13.
// let a = Number(prompt("Enter side 1:"));
// let b = Number(prompt("Enter side 2:"));
// let c = Number(prompt("Enter side 3:"));

// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Valid Triangle");
// } else {
//     console.log("Invalid Triangle");
// }

//Q14.
// let a = Number(prompt("Enter side 1:"));
// let b = Number(prompt("Enter side 2:"));
// let c = Number(prompt("Enter side 3:"));

// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Valid Triangle")
//     if (a === b && b === c) {
//         console.log("Equilateral Triangle");
//     } else if (a === b || b === c || a === c) {
//         console.log("Isosceles Triangle");
//     }else {
//         console.log("Scalene Triangle");
//     }
// } else {
//     console.log("Invalid Triangle");
// }

//Q15. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Q16.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Q17.
// let num = Number(prompt("Enter a number:-"))
// let lowerLimit = Number(prompt("Enter lower limit:-"))
// let upperLimit = Number(prompt("Enter upper limit:-"))
// if(num>=lowerLimit && num<=upperLimit){
//     console.log("Number is within the range");
// }else{
//     console.log("Number is outside the range");
// }

//Q18.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Q19.
// let age = Number(prompt("Enter ur age:-"))
// let marks = Number(prompt("Enter ur marks:-"))
// let attendance = Number(prompt("Enter ur attendance percentage:-"))
// if(age>=18 && marks>=60 && attendance>=75){
//     console.log("Eligible for exam");
// }else{
//     console.log("Not Eligible for exam");
// }

//20.
// let salary = Number(prompt("Enter ur salary:-"))
// let exp = Number(prompt("Enter ur experience in years:-"))
// let bonus = 0
// if(exp>=10){
//     bonus = salary*0.2
// }else if(exp>=5){
//     bonus = salary*0.1
// }else {
//     bonus = salary*0.05
// }
// console.log("Bonus Amount:-", bonus)
// console.log("Total Salary with Bonus:-", salary+bonus)

//21.
// let age = Number(prompt("Enter ur age:-"))
// let salary = Number(prompt("Enter ur salary:-"))
// let isEmployed = true
// if(age>=21 && age<=60 && salary>=30000 && isEmployed){
//     console.log("Eligible for loan");
// }else{
//     console.log("Not Eligible for loan");
// }

//22.
// let annualIncome = Number(prompt("Enter ur annual income:-"))
// let taxRate;
// if(annualIncome<=250000){
//     taxRate = 0
// }else if(annualIncome<=500000){
//     taxRate = 0.05
// }else if(annualIncome<=1000000){
//     taxRate = 0.2
// }else{
//     taxRate = 0.3
// }
// console.log("Tax to be paid:-", annualIncome*taxRate)

//23.
// let PIN = 1234
// let balance = Number(prompt("Enter ur balance:-"))
// let amount = Number(prompt("Enter amount to withdraw:-"))
// let enteredPIN = Number(prompt("Enter ur PIN:-"))
// if(enteredPIN == PIN){
//     if(amount > 0 && amount<=balance){
//         console.log("Withdrawal Successful");
//         balance -= amount
//         console.log("Remaining Balance:-", balance);
//     }else{
//         console.log("Insufficient Balance");
//     }
// }else{
//     console.log("Incorrect PIN");
// }


//24.
// let num = Number(prompt("Enter a number:-"))
// if(num%7==0 && num%11==0){ 
//     console.log("Divisible by both 7 and 11");
// }else if(num%7==0){
//     console.log("Divisible by 7");
// }else if(num%11==0){
//     console.log("Divisible by 11");
// }else{
//     console.log("Not Divisible by 7 or 11");
// }

//25. 
// let amount = Number(prompt("Enter amount:-"))
// let isMembershipPremium = true
// if(amount>=2000 || isMembershipPremium){
//     console.log("Eligible for free shipping");
// }else{
//     console.log("Shipping charges--", 100);
//     console.log("Final Amount:-", amount+100);
// }

//26.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//27.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//28.
// let age = Number(prompt("Enter ur age:-"))
// let day = prompt("Enter day prefrence:-")
// let price;
// if(age>=60){
//     price= 120
// }else if(age>=12){
//     price = 200
// }else {
//     price = 100
// }
// if(day == "saturday" || day == "sunday"){
//     console.log("Base Price:", price);
//     console.log("weekend subcharges:-", 50)
//     console.log("Final Price:-", price+=50);
// }else{
//     console.log("Final Price:", price);
// }

//29.
// let rating = Number(prompt("Enter ur rating (1-5):-"))
// let attendance = Number(prompt("Enter ur attendance percentage:-"))
// let exp = Number(prompt("Enter ur experience in years:-"))
// if(rating>=4){
//     if(attendance>=90 && exp>=3){
//         console.log("Eligible for promotion");
//     }else{
//         console.log("Not Eligible for promotion");
//     }
// }else{
//     console.log("Not Eligible for promotion");
// }
