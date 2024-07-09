// INSERTION SORT 

const prompt = require('prompt-sync')()
// let n = Number(prompt("enter the length of array >> "))
// let arr =[]
// for(let i =0;i<n;i++){
//     let element = Number(prompt("enter the element >> "))
//     arr.push(element);
// }

// for(let i = 1;i<arr.length;i++){
//     let current = arr[i]
//     let j=i-1;
//     for(j  ;j>=0;j--){
//         if(current<arr[j]){
//             arr[j+1]=arr[j]
//         }else{
//             break;
//         }
        
//     }arr[j+1]=current
// }console.log(arr);

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//  SELECTION SORT

// let n = Number(prompt("enter the number >>> "))
// let arr =[]
// for(let i = 0 ;i<n;i++){
//     let element = Number(prompt("enter the element >> "))
//     arr.push(element)
// }console.log(arr);
// for(let i = 0;i<arr.length;i++){
//     let small = i
//     for(let j =i+1;j<arr.length;j++){
//         if(arr[small]>arr[j]){
//             small = j
//         }
//     }
//     let temp = arr[small]
//     arr[small]= arr[i]
//     arr[i]=temp
// }console.log(arr);

// let n = Number(prompt("enter the number >> "))
// let arr =[]
// for(let i =0;i<n;i++){
//     let element = Number(prompt("enter the element >> "))
//     arr.push(element)
// }console.log(arr);
// for(let i =0;i<arr.length;i++){
//     let smallest = i
//     for(j = i+1;j<arr.length;j++){
//         if(arr[smallest]>arr[j]){
//             smallest = j
//         }
//     }
//     let temp = arr[i]
//     arr[i]=arr[smallest]
//     arr[smallest]=temp
// }console.log(arr);