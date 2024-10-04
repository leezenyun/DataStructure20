var readline = require("readline-sync");

var Ans=Math.floor(Math.random()*100)+1 //0<= rand <1
var win=false;
var topline=100;
var downline=0;

while(!win){
    do{
            var G = readline.questionInt("Please input an intger "+downline+"-"+topline+"?");
        
    }while(G<downline || G>topline)
    // for(var i=0;i<10;i++){

    // }
    // while(){

    // }
    
    if(Ans == G){
        console.log("You Win!")
        //question
        var again=readline.question("Again? Y/N");
        if(again=="Y"){
            Ans=Math.floor(Math.random()*100)+1 
            topline=100;
            downline=0;

        }else{
            win=true;
        }
        
    }
    else if(G>Ans){
        topline=G;
    }
    else if(G<Ans){
        downline=G;
    }
    else{
        console.log("Wrong");
        //goto 4
    }

}