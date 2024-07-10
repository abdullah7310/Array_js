const prompt = require('prompt-sync')()
let n = Number(prompt(`enter the length of the array >> `))
let arr=[]
for(let i =0;i<n;i++){
    let element = Number(prompt("enter the element >> "))
    arr.push(element)
}console.log(arr);

let del  = Number(prompt("enter the position you want to delete >> "))
for(let i = del -1 ;i<arr.length -1;i++){
    arr[i]=arr[i+1]

}
arr.length = arr.length-1
console.log(`deleted array -->> `,arr);