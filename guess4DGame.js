var readline = require("readline-sync");

//Generate 4 digit randomly
var Ans=[0,1,2,3,4,5,6,7,8,9]; //permutation
var win=false;

for(var i=0;i<4;i++){
  var rand = Math.floor(Math.random()*10);
  //swap i, rand
  var temp= Ans[i];
  Ans[i] = Ans[rand];
  Ans[rand] = temp;
}
while(!win){
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


  var countA=0,countB=0;
  for(j=0;j<4;j++){
    for( k=0;k<4;k++){
      if(j==k){
        if(Gstr[j]==Ans[k]){
          countA++;
        }
      }
    }
  }
  for( j=0;j<4;j++){
    for( k=0;k<4;k++){
      if(j==k){
        continue;
      }
      if(Gstr[j]==Ans[k]){
        countB++;
      }
    }
  }
  console.log(countA+"A"+countB+"B");
    if(countA == 4){
    console.log("You Win!")
    var again=readline.question("Again? Y/N");
    if(again=="Y"){
      for(var i=0;i<4;i++){
        var rand = Math.floor(Math.random()*10);
        var temp= Ans[i];
        Ans[i] = Ans[rand];
        Ans[rand] = temp;
      }
    }
    else{
      win=true;
    }
  }
}
