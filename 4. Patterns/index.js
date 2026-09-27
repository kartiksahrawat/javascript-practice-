//~~~~~~~~~~~~~~~~~~~~~~ Q1.Solid Square ~~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let row=1; row<=num; row++){
//     for(let col=1; col<=num; col++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ''
// for(let row=1; row<=num; row++){
//     for(let col=1; col<=num; col++){
//         str += "* "
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q2.Number Square ~~~~~~~~~~~~~~~~~~~~~~~
// let num= 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log();   
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         str += `${j} `
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q3.Same Number Square ~~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         str += `${i} `
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q4.Increasing Triangle ~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`* `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         str += `* `
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q5.Decreasing Triangle ~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=5; j>=i; j--){
//         process.stdout.write(`* `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=5; j>=i; j--){
//         str += `* `
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q6.Increasing Triangle ~~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         str += (`${j} `)
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~ Q7.Continuous Number Triangle ~~~~~~~~~~~~~~~~~~~~
// let num = 5
// let count = 1   
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${count} `)
//         count++
//     }
//     console.log();
// }
//           OR
// let num = 5
// let count = 1
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         str += (`${count} `)
//         count++
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~~~ Q8.Row Number Triangle ~~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         str += (`${i} `)
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~ Q9.Reverse Number Triangle ~~~~~~~~~~~~~~~~~~~~~
// let num = 5 
// for(let i=1; i<=num; i++){                 // 5 4 3 2 1     
//     for(let j=5; j>=i; j--){               // 5 4 3 2
//         process.stdout.write(`${j} `)      // 5 4 3 
//     }                                      // 5 4
//     console.log();                         // 5
// }
 
//~~~~~~~~~~~~~~~~~~~~~~ Q10. 0-1 Triangle ~~~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         if((i+j)%2==0){
//             process.stdout.write("1 ")
//         }else{
//             process.stdout.write("0 ")
//         }
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=i; j++){
//         if((i+j)%2==0){
//             str += "1 "
//         }else{
//             str += "0 "
//         }
//     }
//     str += "\n"
// }
// console.log(str);
 
//~~~~~~~~~~~~~~~~~~~~~~ Q11.Right-Aligned Triangle ~~~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++){
//         process.stdout.write("  ")    
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// } 
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++){
//         str += "  "
//     }
//     for(let j=1; j<=i; j++){
//         str += "* "
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~~~~~~ Q12.Right-Aligned Number Triangle ~~~~~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){ 
//     for(let j=1; j<=num-i; j++){
//         process.stdout.write("  ")            //         1
//     }                                         //       2 2
//     for(let j=1; j<=i; j++){                  //     3 3 3
//         process.stdout.write(`${i} `)         //   4 4 4 4
//     }                                         // 5 5 5 5 5
//     console.log();
// }

// let num = 5
// for(let i=1; i<=num; i++){                       //         1
//     for(let j=1; j<=num-i; j++){                 //       1 2
//         process.stdout.write("  ")               //     1 2 3
//     }                                            //   1 2 3 4
//     for(let j=1; j<=i; j++){                     // 1 2 3 4 5
//         process.stdout.write(`${j} `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++){
//         str += "  "
//     }
//     for(let j=1; j<=i; j++){
//         str += `${j} `
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~ Q13. Inverted Right-Aligned Triangle ~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<i; j++){
//         process.stdout.write("  ")
//     }
//     for(let j=1; j<=num-i+1; j++){
//         process.stdout.write("* ")
//     }

//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<i; j++){
//         str += "  "
//     }
//     for(let j=1; j<=num-i+1; j++){
//         str += "* "
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~ Q14. Number Staircase ~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++){
//         process.stdout.write('  ')
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num-i; j++){
//         str += ('  ')
//     }
//     for(let j=1; j<=i; j++){
//         str += (`${i} `)
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~ Q15. Hollow Square  ~~~~~~~~~~~~~~~
// let num = 5
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         if(i==1 || i==5 || j==1 || j==5){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }
//           OR
// let num = 5
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=num; j++){
//         if(i==1 || i==5 || j==1 || j==5){
//             str += ("* ")
//         }else{
//             str += ("  ")
//         }
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~ Q15. Hollow Square  ~~~~~~~~~~~~~~~
// let num = 4
// let col = 7
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=col; j++){
//         if(i==1 || i==4 || j==1 || j==7){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }
//           OR
// let num = 4
// let col = 7
// let str = ""
// for(let i=1; i<=num; i++){
//     for(let j=1; j<=col; j++){
//         if(i==1 || i==4 || j==1 || j==7){
//             str += ("* ")
//         }else{
//             str += ("  ")
//         }
//     }
//     str += "\n"
// }
// console.log(str);

//~~~~~~~~~~~~~~~ Q19. Pyramid  ~~~~~~~~~~~~~~~
let num = 5
for(let i=1; i<=num; i++){
    for(let j=1; j<=num-i; j++){
        process.stdout.write(" ")
    }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log();   
}
