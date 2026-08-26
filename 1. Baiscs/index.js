let std ={
    name: "John Doe",
    age: 20,
    gender: "Male",
    adress: {
        city: "New York"
    }
}
let upStd = {
    ...std,
    age: 21,
}
upStd.adress.city= "Los Angeles"
console.log(upStd)
console.log(std)