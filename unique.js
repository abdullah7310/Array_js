
const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let arr =[]
for(let i = 0;i<n;i++){
    let element = Number(prompt(`enter the element ${i+1} >>  `))
    arr.push(element)
}console.log(`your first array is >> `,arr);
let arr2 = []
let count = 0;
for(let  i=0;i<arr.length;i++){
if(arr[i]!==null){
    let count =1
     for(let j=i+1;j<=arr.length;j++){
       
        
            if(arr[i]==arr[j]){
            // arr2.push(arr[j]);
             count +=1;
            arr[j]=null
           
        
        }
        
     }if(count === 1){
        arr2.push(arr[i])
    }
}
    
}console.log(`your unique number in the array is >> `,  arr2);