const prompt = require('prompt-sync')()
let n = Number(prompt("enter the length of the array >> "))
let arr=[];
for(let i = 0;i<n;i++){
    let element = Number(prompt("enter the element >> "))
    arr.push(element)
}console.log(arr);
let max=arr[0];
let min =arr[0];
for(let i =1;i<arr.length;i++){
   if(arr[i]>max){
    max = arr[i]
   }
   if(arr[i]<min){
    min = arr[i]

   }
    
}console.log("maximum element of this array is >> ", max);
console.log("Minimum element of this array is >> ", min);


