const prompt = require('prompt-sync')()
let r = Number(prompt("enter the number of row >> "))
let col = Number(prompt("enter the number of  cols >> "))
let arr =[]
for(let i =0;i<r;i++){
    arr[i]=[]
    for(let j= 0 ;j<col;j++){
        let el = Number(prompt("enter the elements >> "))
        arr[i][j]=el
        
    }
}
console.log(arr);

for(let i =0;i<r;i++){
    for(let j= 0 ;j<col;j++){
        process.stdout.write(`${arr[i][j]} `)
    }
    console.log();
}
