function bracketMatch(inputString){
  var opening=[];
  var isMatched=true;
  var symbol = inputString.charAt(i=0);
  while(isMatched&&symbol!='')
    opening.push(symbol);
  if(symbol=='}'||symbol=='('||symbol=='['){
    if(opening.length==0)isMatched=false;
    else{
      math=opening.pop
    }
  }
}
 