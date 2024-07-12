const prompt= require("prompt-sync")()
let n= Number(prompt("enter the length of the array >> "))
let arr=[]
for(let i = 0;i<n;i++){
    let element = Number(prompt(`enter the element ${i+1} >> `))
    arr.push(element)
}console.log("your original array is >> ",arr);
let min = arr[0]
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i]
    }
}console.log("your minimum array is >> ",min);
let smin = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]<smin && smin>min){
        smin=arr[i]
    }
}console.log("your second minimum array is >> ",smin);