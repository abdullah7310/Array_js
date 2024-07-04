const prompt = require('prompt-sync')()
let n = Number(prompt("enter the Number >> "))
let arr=[]
for(let i = 0;i<n;i++){
    element = Number(prompt("enter the elements >> "));
    arr[i]=element
}
let arr2 =[]
for(let i=n-1;i>=0;i--){
    arr2.push(arr[i])
}
console.log(arr2);