
//max _row=0...4, _col=0...5
// [1][2]=>
// [0][1],[0][2],[0][3]     =>[_row-1][_col-1],[_row-1][_col],[_row-1][_col+1]
// [1][1],[_row][_col],[1][3]=>[_row][_col-1],[_row][_col],[_row][_col+1]
// [2][1],[2][2],[2][3]      =>[_row+1][_col-1],[_row+1][_col],[_row+1][_col+1]

var row=ary2d.length;
var col=ary2d[0].length;

//draw map
var canvas = document.getElementById("map").getContext("2d");
var size=Math.min(canvas.canvas.height/row, canvas.canvas.width/col);
for(var _row=0;_row<row;_row++){
    for(var _col=0;_col<col;_col++){
        //ar2d[_row][_col]=>0,1
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#0000ff"
        }else{
            canvas.fillStyle="#000000"
        }
        //600/5=>120  coordinate x,y , width, heigth
        canvas.fillRect(_col*size,_row*size,size,size);
        canvas.strokeRect(_col*size,_row*size,size,size);
    }
}

function neighbor(_row,_col){
   var count=0;
   //visit 8 neighbor

   return count;

}