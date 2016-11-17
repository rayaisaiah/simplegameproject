//movement
var metax = Number(document.getElementById("kirby").getAttribute("x"));
document.addEventListener("keydown", function(e) {
  var foodCounter = 0;
  var food = document.getElementById("food");
  var foodx =  Number(document.getElementById("food").getAttribute("x"));
  var foody =  Number(document.getElementById("food").getAttribute("y"));

  var foodWidth = Number(document.getElementById("food").getAttribute("width"));
  var foodHeight = Number(document.getElementById("food").getAttribute("height"));
  function randomNumberGenerator(min,max)
 {
     return Math.floor(Math.random()*(max-min+1)+min);
 }
  var val1 = randomNumberGenerator(1,200);


 if (e.keyCode == 37 && metax + 10 > 0) {
    document.getElementById("kirby").setAttribute("x",metax-10)
    metax = metax-10
    if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
      document.getElementById("food").setAttribute("x", val1);
      foodCounter = foodCounter + 1;
      console.log("works?");
    }
 }
 else if (e.keyCode == 39 && metax + 10 <200 ){
    document.getElementById("kirby").setAttribute("x",metax+10)
    metax = metax+10
    if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
      document.getElementById("food").setAttribute("x", val1);
      foodCounter = foodCounter + 1;
      console.log("works?");
    }
 }

})
var metay = Number(document.getElementById("kirby").getAttribute("y"));
document.addEventListener("keydown", function(e) {

  var foodx =  Number(document.getElementById("food").getAttribute("x"));
  var foody =  Number(document.getElementById("food").getAttribute("y"));

  var foodWidth = Number(document.getElementById("food").getAttribute("width"));
  var foodHeight = Number(document.getElementById("food").getAttribute("height"));

  function randomNumberGenerator(min,max)
 {
     return Math.floor(Math.random()*(max-min+1)+min);
 }
  var val1 = randomNumberGenerator(1,200);

  if (e.keyCode == 38 && metay + 10 > 0) {
    document.getElementById("kirby").setAttribute("y",metay-10)
    metay = metay-10
    if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
      document.getElementById("food").setAttribute("x",val1);
      foodCounter = foodCounter + 1;
      console.log("works?");
    }
 }
 else if (e.keyCode == 40 && metay + 10 < 95){
    document.getElementById("kirby").setAttribute("y",metay+10)
    metay = metay+10
    if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
      document.getElementById("food").setAttribute("x",val1);
      foodCounter = foodCounter + 1;
      console.log("works?");
    }
 }

})
