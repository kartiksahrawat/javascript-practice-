let num = 1
let count = 0
while(num<=100){
    if(num%3==0 && num%5==0){
        count++
    }
    num++
}
console.log(count);