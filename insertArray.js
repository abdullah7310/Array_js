const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let arr =[]
for(let i = 0;i<n;i++){
    let element = Number(prompt(`enter the element ${i+1} >> `))
    arr.push(element)
}
for(let i = 0;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
}console.log(`Sorted array is >> `,arr);
let arr2=[]
let insert = Number(prompt("enter the value that you want to insert >> "))
for(let i=0; i<arr.length+1; i++){
    if(arr[i]<insert){
        arr2.push(arr[i])
    }else{
        arr2.push(insert)
        insert= arr[i]
    }
   
}
console.log(arr2);