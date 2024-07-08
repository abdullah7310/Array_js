const prompt = require('prompt-sync')()
let n = Number(prompt("enter the numbere >> "))
let arr =[]
for(let i =0;i<n;i++){
    let element = Number(prompt("enter the element >> "))
    arr.push(element)
}
for(let i = 0 ;i<arr.length;i++){
    for(j =0 ;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp;
            temp = arr[j+1]
            arr[j+1]=arr[j]
            arr[j]=temp
        }
    }
}
console.log(arr);