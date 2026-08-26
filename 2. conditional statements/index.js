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


let units = Number(prompt("Enter ur units-"))
let bill;
if( units <=100){
    console.log("Unit Rate-", units*5)
    bill = units*5
}else if(units <= 200){
    console.log("Unit rate-", units*7)
    bill = units*7
}else if(units <= 500){
    console.log("Unit rate-", units*10)
    bill = units*10
}else if(units > 500){
    console.log("Unit rate-", units*15)
    bill = units*15
}
 if(bill >= 3000){
    console.log("Discount-", bill*0.1)
    console.log("Final Bill-", bill-(bill*0.1));
 }else{
    console.log("Final Bill-", bill);
 }
