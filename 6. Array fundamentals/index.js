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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 3 — slice() / splice() ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Q11. Extract Without Modifying
let arrSlice = (arr)=>{
  return [ 
    arr,
    arr.slice(1,4)
  ]
}
// console.log(arrSlice([10, 20, 30, 40, 50]));

// Q12. Remove Specific Elements
let eleRev = (arr)=>{
  return [
    [...arr],
    arr.splice(2,2),
    arr,
  ]
}
// console.log(eleRev([10, 20, 30, 40, 50]));

// Q13. Replace Using splice() 
let replaceEle = (arr)=>{
  arr.splice(2, 1, "JavaScript")
  return arr
}
// console.log(replaceEle(["HTML", "CSS", "Python", "Java"]));


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 4 — Mixed Fundamentals ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Q14. Array Transformation
let addRemove = (arr)=>{
  arr.pop()
  arr.unshift(5)
  return arr
}
// console.log(addRemove([10, 20, 30, 40, 50]));

// Q15.  Array Fundamentals Challenge
let allStuff =  (arr)=>{
  console.log(arr.length);
  arr.splice(2,1,"JavaScript")
  arr.unshift("Git")
  arr.pop()
  console.log(arr.includes("JavaScript"))
  return [ arr, "Length of final array:-", arr.length ]
}
// console.log(allStuff(["HTML", "CSS", "Python", "Java", "C++"]));

























