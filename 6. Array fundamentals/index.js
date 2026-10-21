                                                                                                            // JavaScript Arrays
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 1 — Basics ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Q1. Create & Access
let arr = [10, 20, 30, 40, 50]
// console.log(arr, arr[0], arr[arr.length-1]);

// Q2. Update an Element
let arr1 = [10, 20, 30, 40, 50];
arr1[1] = 25
// console.log(arr1);

// Q3. Access Specific Elements
let arr2 = [10, 20, 30, 40, 50];
// console.log(arr2[0], arr2[2], arr2[4]);

// Q4. First + Last
let sumFL = (arr)=>{
  return arr[0]+arr[arr.length-1]
}
// console.log(sumFL([10, 20, 30, 40, 50]));

// Q5. Array Check
let check = (arr)=>{
  if(arr.includes("JavaScript")){
    return "FOUND!"
  }
  else{
    return "NOT FOUND!"
  }
}
// console.log(check(["HTML", "CSS", "Java", "JavaScript"])); // found
// console.log(check(["HTML", "CSS", "Java", "Javascript"])); // not found


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 2 — Adding & Removing ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Q6. Add Elements
let addEle = (arr)=>{
  arr.push("Mango", "Grapes")
  return arr
}
// console.log(addEle(["Apple", "Banana", "Orange"]));

// Q7. Remove & Print
let revEle = (arr)=>{
  let rev = arr.pop()
  return [
    rev,
    arr
  ]
}
// console.log(revEle([ 'Apple', 'Banana', 'Orange', 'Mango', 'Grapes' ]));

// Q8. Beginning Manipulation
let addRem = (arr)=>{
  arr.unshift("Kartik")
  // console.log(arr);
  arr.shift()
  // console.log(arr);
  
}
// addRem(["Rahul", "Aman", "Rohit"])

// Q9. Conditional Addition
let condAdd = (arr)=>{
  if(arr.includes(100)){
    return arr
  }else{
    arr.push(100)
    return arr
  }
}
// console.log(condAdd([10, 20, 30, 40, 50]));
// console.log("no need to add", condAdd([10, 20, 30, 40, 50, 100]));

// Q10. Array Length Tracking
let lenArrTrack = (arr)=>{
  // console.log(arr.length);
  arr.push("kartik", "vihana")
  // console.log(arr.length)
  arr.pop()
  // console.log(arr.length);
  
}
// lenArrTrack([10, 20, 30, 40, 50])






























