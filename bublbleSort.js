const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the number >> "))
// let arr=[]
// for(let i =0;i<n;i++){
//     let element = Number(prompt(`enter the element ${i+1}>>`))
//     arr.push(element)
// }
// for(let i =0;i<arr.length;i++){
//     for(let j= 0;j<arr.length;j++){
//         if(arr[j]<arr[j+1]){
//             let temp;
//             temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
            
//         }
//     }
// }console.log(arr);

let arr =[1,2,3]
let arr1 =[1,2,3]
let arr2 ;
arr2 =arr.concat(arr1)
// console.log(arr2);
for(let i =0;i<arr2.length;i++){
    for(let j =0;j<arr2.length;j++){
        if(arr2[j]<arr2[j+1]){
            let temp;
            temp = arr2[j]
            arr2[j]=arr2[j+1]
            arr2[j+1]=temp
        }
    }
}console.log(arr2);