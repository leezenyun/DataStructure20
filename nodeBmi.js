var readline = require("readline-sync");

var weight= readline.questionInt("Please input ur weight(KG)?");
var height= readline.questionInt("Please input ur height(cm)?");;
var bmi=weight/((height/100)**2);
console.log("Hello, your BMI is:"+ bmi);

if(bmi<18.5){
    console.log("體重過輕");
    
}
else if(18.5<=bmi&&bmi<24){
    console.log("健康體位");
    
}
else if(24<=bmi&&bmi<27){
    console.log("過重");
    
}
else if(27 <= bmi&&bmi < 30){
    console.log("輕度肥胖");
    
}
else if(30 <= bmi&&bmi < 35){
    console.log("中度肥胖");
    
}
else if(bmi >= 35){
    console.log("重度肥胖");
    
}
