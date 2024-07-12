const prompt = require('prompt-sync')()
let n = Number(prompt("enter the number >> "))
let arr =[]
for(let i = 0 ;i<n;i++){
    element = Number(prompt(`enter the element ${i+1} >> `))
    arr.push(element)
}
console.log("Now enter the element for the second array >> ");
let arr2 = []
for(let i = 0;i<n;i++){
    element = Number(prompt(`enter the element ${i+1} >> `))
    arr2.push(element)
}
console.log(`Your first array is >> `,arr);
console.log(`Your second array is >> `,arr2);
let arr3=[]
for(let i =0;i<arr.length;i++){
    arr3.push(arr[i]);
}
for(let j = 0;j<arr2.length;j++){
    arr3.push(arr2[j])
}
console.log("Merged array is >> " ,arr3);
for(let k = 0;k<arr3.length;k++){
    for(let j = k+1;j<arr3.length;j++){
        if(arr3[k]<arr3[j]){
        let temp = arr3[k]
        arr3[k]=arr3[j]
        arr3[j]=temp
    }
    }
    
}console.log("Sorted Merged array is >> ",arr3);
