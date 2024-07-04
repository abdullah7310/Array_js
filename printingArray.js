const prompt = require('prompt-sync')()

// Normal printing the arrray >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.


let n = Number(prompt('enter the number >> '))
let arr = []
for(let i = 0;i<n;i++){
    element = Number(prompt(`enter the element ${i+1} >> `))
    arr[i]=element
}
console.log(arr);


