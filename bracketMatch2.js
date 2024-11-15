function bracketMatching(str){
    var left="{[(";
    var right="}])";
    var open=[]
    var symbol =str.charAt(i=0);
    var isMatched=true;
    while(isMatched&&symbol!=''){
        if(left.includes(symbol)){
            open.push(symbol);
        }
        if(right.includes(symbol)){
            if(open.length==0)
                isMatched=false;
            else{
                match=open.pop();
                isMatched=left.indexOf(match)==right.indexOf(symbol);
            }
        }
        i++;
        symbol=str.charAt(i);

    }
    if(open.length>0||!isMatched)
        return 'unMatched'
    else
        return 'matched'
}
var test="{a = (1 + v(b[3 +c[4]]))"
console.log(bracketMatching(test));