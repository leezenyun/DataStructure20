var readline = require("readline-sync");


var Ans=[0,1,2,3,4,5,6,7,8,9];
var win=false;
var numtime=0;

for(var i=0;i<4;i++){
  var rand = Math.floor(Math.random()*10);
  var temp= Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;
}


all:while(!win){

  Ansout=Ans.slice(0,4);

  outer:do{
    var G=readline.questionInt("Please input 4 digits? ");
    var Gstr = G.toString();
    for(var j=0;j<4;j++){
      for(var k=0;k<4;k++){
        if(j!=k){
          if(Gstr[j]==Gstr[k]){
            console.log("Do not enter repeated numbers")
            G=0;
           continue outer;
          }
        } 
      }
    }
  }while(G<100 || G>=10000);

  numtime++;
  var countA=0,countB=0;

  for( j=0;j<4;j++){
    for( k=0;k<4;k++){
      if(j==k){
        if(Gstr[j]==Ansout[k]){
          countA++;
      }
      if(j!=k){
      if(Gstr[j]==Ansout[k]){
        countB++;
      }
    }
    }
  }
  }

  console.log("次數:"+numtime);
  console.log(countA+"A"+countB+"B");

  if(countA == 4||numtime==10){
    if(countA == 4)  
      console.log("You Win!")
    if(numtime==10)  
      console.log("You lose!")
  var again=readline.question("Again? Y/N  ");
  if(again=="Y"){
    for(var i=0;i<4;i++){
      var rand = Math.floor(Math.random()*10);
      var temp= Ans[i];
      Ans[i] = Ans[rand];
      Ans[rand] = temp;
      numtime=0;
    }
    }
  
  else{
    win=true;
  }
}
  

}

