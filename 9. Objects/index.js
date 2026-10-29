//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 1 — Object Access ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1. Basic Object Access
let student = {
    name: "Kartik",
    age: 20,
    course: "B.Tech-CSE",
    college: "Madharchodd"
}
console.log(student.name + "\n" + student.age + "\n" + student.course  + "\n" + student.college);
console.log(student["name"] + "\n" + student["age"] + "\n" + student["course"]  + "\n" + student["college"]);

// Q2. Update Object Properties
let student2 = {
    name: "Kartik",
    age: 20,
    course: "B.Tech-CSE",
}
student2.age = 19
student2.course = "Mtech at IIT Delhi"  
console.log(student2);

// Q3. Dynamic Property Access
let student3 = {
    name: "Kartik",
    age: 20,
    course: "B.Tech-CSE",
}
let key = "course";
console.log(student3[key]);
console.log(student3.key); // ye undefined dega kyuki ye direct object me jaa kr search krega "key" ko.

// Q4. Computed Property
let key2 = "City"
let obj = {
    [key2]: "Delhi"
}
console.log(obj);

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 2 — Nested Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q5. Access Nested Object
let student4 = {
    name: "Kartik",
    address: {
        city: "Gurugram",
        state: "Haryana"
    }
};
console.log(student4.address.city + "\n" + student4.address.state);
console.log(student4[address][city]);     // Ye wrong hai....
console.log(student4["address"]["city"]); // Ye correct hai....
console.log(student4["address"].city);    // Ye correct hai....
console.log(student4.address["city"]);    // Ye correct hai....

// Q6. Update Nested Property
let student5 = {
    name: "Kartik",
    address: {
        city: "Gurugram",
        state: "Haryana"
    }
};
student5.address.city = "Delhi"
console.log(student5);

// Q7. Optional Chaining
let user = {
    name: "Kartik",
    address: {
        city: "Gurugram"
    }
};
console.log(user.address?.city);
console.log(user.address?.pincode);

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 3 — Destructuring ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q8. Object Destructuring
let user2 = {
    name: "Kartik",
    address: {
        city: "Gurugram"
    }
};
let {name, address} = user2
console.log(name);
console.log(address); //Output- { city: 'Gurugram' }
let {address:{city}} = user2
console.log(city);    //Output- Gurugram

// Q9. Nested Destructuring
let user3 = {
    name: "Kartik",
    address: {
        city: "Gurugram",
        state: "Haryana"
    }
};
let {name,address:{city}, address:{state}} = user3
console.log(name);    
console.log(city);    
console.log(state);    

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 4 — Object Iteration ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q10. `for...in`
let student6 = {
    name: "Kartik",
    age: 20,
    course: "BTech"
};
for(let keys in student6){
    console.log(keys);
}

// Q11. Keys + Values
for(let val in student6){
    console.log(val, student6[val]); 
}

// Q12. `Object.keys()` vs `Object.entries()`
let user4 = {
    name: "Kartik",
    age: 20,
    city: "Gurugram"
};
console.log(Object.keys(user4))
console.log(Object.entries(user4))

// ~~~~~~~~ Extras ~~~~~~~~
let val = Object.entries(user4)
for(let key of val ){
 console.log(key);
}
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Practice ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// a. spread operator: ye copy bana kr deta hai kisi bhi array ki and koi bhi changes old array me nhi hote asd asd asd asd asd 
let test1 = {
    name : "Kartik",
    age : 20,
    sex : "Male"
}
let copy1 = {...test1}
copy1.name = "Vihana"
copy1.sex = "Female"

console.log(copy1);
console.log(test1);
console.log(test1 === copy1);

// b. adding new elements in copied object...
let test2 = {
    name : "Kartik",
    age : 20,
    sex : "Male"
}
let copy2 = {
    ...test2,
    city : "Delhi"
}
console.log(copy2);

// c. updating existing property...
let test3 = {
    name: "kartik",
    age: 20
}
let update = {
    ...test3,
    age: 21
}
console.log(test3);
console.log(update);

// d. combinig objects:-
// d.1. spread operator...
let extra = {
    city: "Gurugram",
    role: "Developer"
};

let extra2 = {
    sex: "male",
    age: 20
};

let extra3 = {
    xyz: "abc",
    bc: 0,
    aim: "luxury n fame"
};

let combinedObj = {...extra, ...extra2, ...extra3}
console.log(combinedObj);

// d.2. Object.assign...
let copyAss = Object.assign({}, extra, extra2)
console.log(copyAss);

// e. shallow copy...
let abc = {
    name: "Kartik",
    aim: {
        aim1: "Mtech IIT Delhi",
        aim2: "Consistency"
    }
}
let shallowCopy = {...abc}
shallowCopy.aim.aim1 = "2028 Gate Mtech IIT Delhi"
console.log(abc.aim.aim1); // Shallow copy because nested things are still refers to the reference

// f. Deep Copy...
let def = {
    name: "Kartik",
    aim: {
        aim1: "Mtech IIT Delhi",
        aim2: "Consistency"
    }
}
let deepCopy = structuredClone(def)
deepCopy.aim.aim1 = "2028 Gate Mtech IIT Delhi"
// console.log("original:-", def.aim.aim1);
// console.log("copied:-", deepCopy.aim.aim1);

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Level 5 — Copying & Combining Objects ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q13. Spread vs `Object.assign()` 
let user6 = {
    name: "Kartik",
    age: 20
};
let extra6 = {
    city: "Gurugram",
    role: "Developer"
};
let newObj1 = {...user6, ...extra6}
let newObj2 = Object.assign({}, user6, extra6)
console.log(newObj1);
console.log(newObj2);

// Q14. Shallow Copy vs Deep Clone
let user7 = {
    name: "Kartik",
    address: {
        city: "Gurugram"
    }
};
//Shallow copy:-
let shallowCp = {...user7}
console.log(shallowCp);

// Deep copy:-
let deepCp = structuredClone(user7)
console.log(deepCp);
deepCp.address.city = "Delhi"
console.log(deepCp);

// Q15. ☠️ Final Object Challenge
let user8 = {
    name: "Kartik",
    age: 20,
    skills: {
        frontend: "JavaScript",
        ackend: "Node.js"
    },
    location: {
        city: "Gurugram",
        country: "India"
    }
};
// a. Dot notation se `name` print kare.
console.log(user8.name);

// b. Bracket notation se `age` print kare.
console.log(user8["age"]);

// c. Nested object se `frontend` print kare.
console.log(user8.skills.frontend);

// d. Destructuring se `name` aur `city` nikale.
let {name, location:{city}} = user8
console.log(name);
console.log(city);

// e. `for...in` se `location` ki properties print kare.
for(let prop in user8.location){
    console.log(prop, user8.location[prop]);
}

// f. `Object.keys()` se user ki keys nikale.
console.log(Object.keys(user8));

// g. Spread operator se user ki copy banaye.
let copy8 = {...user8}
console.log(copy8);

// h. Optional chaining se `user.social?.instagram` safely access kare.
console.log(user.social?.instagram);

// i. Computed property ka use karke object me dynamically `"github"` property add kare.
let key8 = "github"
user8[key8] = "KartikGithub"
console.log(user8)


