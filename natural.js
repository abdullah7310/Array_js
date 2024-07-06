const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let arr =[]
for(let i = 1;i<=n;i++){
    arr.push(i)
}
console.log(arr);