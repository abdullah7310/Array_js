const prompt=require('prompt-sync')()
let n = Number(prompt("enter the 1st array number >> "))
let arr =[]
for(let i =0;i<n;i++){
    let element = Number(prompt(`enter the number ${i+1} >> `))
    arr[i]=element
}
let count=0;
let arr2=[]
for(let i = 0;i<arr.length;i++){
    if(arr[i]!==null){
         for(let j=i+1;j<=arr.length;j++){
        if(arr[i]==arr[j]){
            arr2.push(arr[j]);
            arr[j]=null
        }
    }
    }
   
}console.log(arr2);

// // let m = Number(prompt("enter the 2nd array number >> "))
// // let arr2=[]
// // for(let i=0;i<m;i++){
// //     let element = Number(prompt(`enter the number ${i+1}>> `))
// //     arr2.push(element)
// // }
