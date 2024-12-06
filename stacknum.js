var readline = require("readline-sync");
let n = readline.questionInt('Please input an intger')
function fab(n){
    if(n<=1){
        return 1;
    }else{
        return fab(n-1)+fab(n-2)
    }
}

let count=0;
let result=0;

while(result<=n){
    count++;
    result=fab(count);
}
console.log(`第${count}數${result}超過了`)