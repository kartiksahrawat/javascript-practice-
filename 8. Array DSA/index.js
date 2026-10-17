//Q1. Find the largest element
// function largest(arr){
//     let largest = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i] 
//         }
//     }
//     return largest
// }
// console.log(largest([10, 45, 2, 89, 34, 101]))

// 2. Find the smallest element in an array.
// function smallest(arr){
//     let smallest = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }
// console.log(smallest([10, 45, 2, 89, 34, 101]))

// 3. Find the second largest element.
// function secLarge(arr){
//     let largest = arr[0]
//     let secLarge = 0
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > largest){
//             secLarge = largest
//             largest = arr[i]
//         }
//     }
//     return secLarge
// }
// console.log(secLarge([10, 45, 2, 34, 91, 101]))
// Doubt 1: negative numbers ki array me always showing 0
// Doubt 2: largest number always last me hona chahiye and iss largest ke baad hum koi bhi second largest input daal rhe hai toh ans glt aarha hai 

// Q4. Find the second smallest element in an array
// function secSmallest(arr){
//     let smallest = arr[0]
//     let secSmallest = 0
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < smallest){
//             secSmallest = smallest
//             smallest = arr[i]
//         }
//     }
//     return secSmallest
// }
// console.log(secSmallest([10, 2, 45, 89, 34, 5]))
// Doubt 1: negative numbers ki array me always showing 0
// Doubt 2: largest number always last me hona chahiye and iss largest ke baad hum koi bhi second largest input daal rhe hai toh ans glt aarha hai 

// Q5. Find the sum of all elements in an array
// function sumEle(arr){
//     let sum = 0
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumEle([10, 20, 30, 40, 50]));

// Q6. Find the Average of All Elements
// function avgEle(arr){
//     let sum = 0
//     let n = arr.length 
//     let avg = 0
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     avg = sum/n
//     return avg
// }
// console.log(avgEle([10, 20, 30, 40, 50]));

// Q7: Count Even and Odd Numbers
// function countEnO(arr){
//     let countEven = 0
//     let countOdd = 0
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             countEven++
//         }else{
//             countOdd++
//         }
//     }
//     return {countEven, countOdd}
// }
// console.log(countEnO([12, 7, 4, 9, 16, 3, 20, 11, 8, 5, 13]));

// Q8. Count Positive, Negative, and Zero Elements
function count(arr){
    let countPosi = 0
    let countNega = 0
    let countZero = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]>0){
            countPosi++
        }
        else if(arr[i]<0){
            countNega++
        }
        else{
            countZero++
        }
    }
    return { countPosi, countNega, countZero}
}
console.log(count([12, -7, 0, 9, -16, 0, 20, -11, 8, -5, 13]));
