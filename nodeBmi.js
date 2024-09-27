var readline = require("readline-sync");

var weight= readline.question("Please input ur weight(KG)?");
var height= 160;
var bmi=weight/((height/100)**2);
document.getElementById("bmi").innerHTML=bmi;
    
