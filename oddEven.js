const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let arr=[]
for(let i = 0;i<n;i++){
    let element = Number(prompt("enter the element >> "))
    arr.push(element)

}console.log(arr);   

let even =[]
let odd =[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
}console.log("Array of even number is >> ", even);
console.log("Array of odd number is >> ", odd);