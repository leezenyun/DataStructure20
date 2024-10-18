var row=9, col=7;
var dynaAry2d=[];
for(var _row=0;_row<row;_row++){
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++){
        dynaAry2d[_row].push(_row+"-"+_col);
       }
        for(var i=0;i<9;i++){
            for(var k=0;k<7;k++){
            var rand = Math.floor(Math.random()*9);
            var rand2 = Math.floor(Math.random()*7);
            var temp= dynaAry2d[k][i];
            dynaAry2d[k][i] = dynaAry2d[rand][rand2];
            dynaAry2d[rand][rand2] = temp;
          }
    }
}
console.log(dynaAry2d);