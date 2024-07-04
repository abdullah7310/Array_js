const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number (n) >> "))
let arr =[]
for(let i = 0;i<n;i++){
    let element = Number(prompt("enter the elements >> "))
    arr[i]=element
    
}
let sum  =0;
for(let i = 0;i<arr.length;i++){
    sum += arr[i]
}console.log(sum);