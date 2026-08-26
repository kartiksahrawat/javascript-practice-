// ARRAY
// let ary = ["hello", 63, true, undefined, null]
// ary[5] = "Kartik"
// ary[100] = "Jaat"
// console.log(ary[5]);
// console.log(ary);

// let ary = ['Kartik','loves','independence']
// for(let i= 0; i<=2; i++){
//     console.log(ary[i]);
    
// }

// let ary = [30, 546, 21, 97, 57, 75, 121, 2556, 702, 68, 251]
// for(let i=0; i<=10; i++){
//     if(ary[i]%2==0){
//         console.log(ary[i])
//     }
// }
// but abb ye sooch ki bc bhut saare elements hue toh toh iske liye use krenge "ary.length"
// for(let i= 0; i<=ary.length-1; i++){

// }
// or
// for(let i= 0; i<ary.length; i++)


// let arr = [10,20,30];

// let ans = arr.map(function(num){
//     return num / 10;
// });

// console.log(ans);

// let arr = [ 10,20,30,40,50,60,70,80,90,100]
// let newarr = arr.filter(function(num){
//     return num > 40
// })
// console.log(newarr);


// let arr = [1,2,3];

// let ans = arr.forEach(function(num){
//     return num+10;
// });

// console.log(ans);


// let self = {
//     name : "kartik",
//     love : "kashish",
//     aim : {
//         placement : 2028,
//         package : "25lPA",
//         ytSubs : "100K"
//     },
//     josh : "pura hai"
// }
// console.log(self.love, self.name, self.aim.package);
// // console.log(self['love']);

// let arr = [1,2,3];
// let ans = arr.forEach(function(num){
//     num * 2;
// });
// console.log(ans);

// let arr = [1,2,3];

// let ans = arr.forEach(function(num){
//     return num * 2;
// });

// console.log(ans);

// let arr = [10,20,30,40,50,50.1,70,80,90,100];

// let ans = arr.find(function(num){
//     return console.log(num > 50);
// });

// console.log(ans);

// let student = {
//     name: "Kartik",
//     age: 20,
//     aim: "25LPA package in 2028",
// };
// for(let key in student){
//     console.log(key, student[key]);
// }

// let student = {
//     name: "Kartik",
//     age: 20,
//     city: "Delhi"
// };

// let keys = Object.keys(student);

// for(let key of keys){
//     console.log(key);
// }



// let pro = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     price: 2499,
//     description: "Comfortable wireless headphones with clear sound."
//   },
//   {
//     id: 2,
//     name: "Smart Watch",
//     price: 3999,
//     description: "Smart watch with fitness tracking and notifications."
//   },
//   {
//     id: 3,
//     name: "Gaming Mouse",
//     price: 1499,
//     description: "High precision gaming mouse with adjustable DPI."
//   },
//   {
//     id: 4,
//     name: "Mechanical Keyboard",
//     price: 3499,
//     description: "RGB mechanical keyboard with tactile switches."
//   },
//   {
//     id: 5,
//     name: "Laptop Stand",
//     price: 999,
//     description: "Adjustable aluminum stand for laptops."
//   },
//   {
//     id: 6,
//     name: "USB-C Hub",
//     price: 1299,
//     description: "Multi-port USB-C hub for connecting multiple devices."
//   },
//   {
//     id: 7,
//     name: "Bluetooth Speaker",
//     price: 1999,
//     description: "Portable speaker with powerful bass and long battery life."
//   },
//   {
//     id: 8,
//     name: "Webcam",
//     price: 2299,
//     description: "Full HD webcam suitable for meetings and streaming."
//   },
//   {
//     id: 9,
//     name: "Gaming Chair",
//     price: 8999,
//     description: "Ergonomic gaming chair with adjustable armrests."
//   },
//   {
//     id: 10,
//     name: "Power Bank",
//     price: 1599,
//     description: "20000mAh power bank with fast charging support."
//   },
//   {
//     id: 11,
//     name: "Wireless Mouse",
//     price: 799,
//     description: "Lightweight wireless mouse with smooth tracking."
//   },
//   {
//     id: 12,
//     name: "Laptop Backpack",
//     price: 1799,
//     description: "Water-resistant backpack with a dedicated laptop compartment."
//   },
//   {
//     id: 13,
//     name: "Phone Tripod",
//     price: 899,
//     description: "Adjustable tripod for smartphones and cameras."
//   },
//   {
//     id: 14,
//     name: "LED Desk Lamp",
//     price: 1199,
//     description: "Adjustable LED lamp with multiple brightness levels."
//   },
//   {
//     id: 15,
//     name: "External SSD",
//     price: 6499,
//     description: "Fast portable SSD for storing and transferring files."
//   },
//   {
//     id: 16,
//     name: "Gaming Controller",
//     price: 2999,
//     description: "Wireless controller compatible with PC and gaming consoles."
//   },
//   {
//     id: 17,
//     name: "Monitor",
//     price: 12999,
//     description: "24-inch Full HD monitor with a smooth refresh rate."
//   },
//   {
//     id: 18,
//     name: "Phone Case",
//     price: 499,
//     description: "Shockproof protective case with a slim design."
//   },
//   {
//     id: 19,
//     name: "Desk Mat",
//     price: 699,
//     description: "Large smooth desk mat suitable for gaming and work."
//   },
//   {
//     id: 20,
//     name: "USB Microphone",
//     price: 4999,
//     description: "High-quality USB microphone for recording and streaming."
//   }
// ];
// let filter = pro.filter(function(product){
//   return product.price >=499 && product.price <= 999;
// })
// console.log(filter);


// Deep Cloning ----------->
// let std ={
//   name : "Kartik",
//   age : 20,
//   address : {
//     city : "Delhi",
//     pin : 110092
//   }
// }
// let copy = structuredClone(std);
// console.log("Original Object:", std);
// console.log("Copied Object:", copy);
// copy.address.city = "Mumbai";
// console.log("After modifying the copied object:");
// console.log("Original Object:", std);
// console.log("Copied Object:", copy);


let students = [
  {
    name: "Aarav",
    age: 18,
    marks: [85, 92, 78]
  },
  {
    name: "Vivaan",
    age: 19,
    marks: [76, 88, 91]
  },
  {
    name: "Aditya",
    age: 18,
    marks: [92, 81, 87]
  },
  {
    name: "Arjun",
    age: 20,
    marks: [68, 74, 82]
  },
  {
    name: "Kabir",
    age: 19,
    marks: [89, 95, 93]
  },
  {
    name: "Rohan",
    age: 18,
    marks: [72, 65, 79]
  },
  {
    name: "Vihaan",
    age: 19,
    marks: [94, 89, 96]
  },
  {
    name: "Reyansh",
    age: 18,
    marks: [81, 77, 85]
  },
  {
    name: "Krishna",
    age: 20,
    marks: [63, 71, 68]
  },
  {
    name: "Ishaan",
    age: 19,
    marks: [88, 84, 90]
  },
  {
    name: "Ananya",
    age: 18,
    marks: [91, 87, 94]
  },
  {
    name: "Diya",
    age: 19,
    marks: [79, 83, 76]
  },
  {
    name: "Aadhya",
    age: 18,
    marks: [95, 92, 89]
  },
  {
    name: "Myra",
    age: 20,
    marks: [74, 69, 81]
  },
  {
    name: "Saanvi",
    age: 19,
    marks: [86, 90, 88]
  },
  {
    name: "Meera",
    age: 18,
    marks: [67, 73, 70]
  },
  {
    name: "Kiara",
    age: 19,
    marks: [93, 85, 91]
  },
  {
    name: "Avni",
    age: 18,
    marks: [78, 82, 75]
  },
  {
    name: "Nisha",
    age: 20,
    marks: [84, 79, 86]
  },
  {
    name: "Tanya",
    age: 19,
    marks: [71, 66, 74]
  }
];
