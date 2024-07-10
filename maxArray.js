const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number > "))
let arr =[]
for(let i=0;i<n;i++){
    let element = Number(prompt(`enter the element ${i+1} >> `))
    arr.push(element)
}console.log("Your original array is >>> ", arr);
let max =arr[0];
for(let i =1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
}console.log("the maximum in the array is >> ", max);
let smax =0;
for(let i =0;i<arr.length;i++){
    if(arr[i]>smax && arr[i]<max){
        smax = arr[i]
    }
}console.log("you second maximum in this array is >> ",smax);


// MAXIMUM AND SECOND MAXIMUM IN THIS FILE &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&