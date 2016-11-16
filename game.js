//movement
var metax = Number(document.getElementById("kirby").getAttribute("x"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37 && metax + 10 > 0) {
    document.getElementById("kirby").setAttribute("x",metax-10)
  metax = metax-10
 }
 else if (e.keyCode == 39 && metax + 10 <200 ){
   document.getElementById("kirby").setAttribute("x",metax+10)
  metax = metax+10
 }

})
var metay = Number(document.getElementById("kirby").getAttribute("y"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 38 && metay + 10 > 0) {
    document.getElementById("kirby").setAttribute("y",metay-10)
  metay = metay-10
 }
 else if (e.keyCode == 40 && metay + 10 < 95){
   document.getElementById("kirby").setAttribute("y",metay+10)
  metay = metay+10
 }

})
//overlaping
var foodCounter = 0;
var food1 = document.getElementById("food1");

var foodx =  Number(document.getElementById("food1").getAttribute("y"));
var foody =  Number(document.getElementById("food1").getAttribute("x"));

var foodWidth = Number(document.getElementById("food1").getAttribute("width"));
var foodHeight = Number(document.getElementById("food1").getAttribute("height"));
if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
  document.getElementById("food1").setAttribute("fill-opacity","0");
  foodCounter + 1;
}
else {}
