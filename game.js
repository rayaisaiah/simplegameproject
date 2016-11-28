//time
var timeStart = Date.now();
//X
var foodCounter = 0;
var metax = Number(document.getElementById("kirby").getAttribute("x"));
var metay = Number(document.getElementById("kirby").getAttribute("y"));

function randomNumberGenerator(min,max)
{
   return Math.floor(Math.random()*(max-min+1)+min);
}


document.addEventListener("keydown", function(e) {

  var food = document.getElementById("food");
  var foodx =  Number(document.getElementById("food").getAttribute("x"));
  var foody =  Number(document.getElementById("food").getAttribute("y"));

  var foodWidth = Number(document.getElementById("food").getAttribute("width"));
  var foodHeight = Number(document.getElementById("food").getAttribute("height"));

  var food1 = document.getElementById("food1");
  var food1x =  Number(document.getElementById("food1").getAttribute("x"));
  var food1y =  Number(document.getElementById("food1").getAttribute("y"));

  var food1Width = Number(document.getElementById("food1").getAttribute("width"));
  var food1Height = Number(document.getElementById("food1").getAttribute("height"));
  //randomNumberGenerator

  var val1 = randomNumberGenerator(1,190);


if (e.keyCode == 37 && metax + 10 > 0) {
    document.getElementById("kirby").setAttribute("x",metax-10)
    metax = metax-10
}
 else if (e.keyCode == 39 && metax + 10 < 200 ){
    document.getElementById("kirby").setAttribute("x",metax+10)
    metax = metax+10
}
else if (e.keyCode == 38 && metay + 10 > 0) {
    document.getElementById("kirby").setAttribute("y",metay-10)
    metay = metay-10
    }
 else if (e.keyCode == 40 && metay + 10 < 95){
    document.getElementById("kirby").setAttribute("y",metay+10)
    metay = metay+10
}

//collision logic
if(metax > foodx && metax < foodx + foodWidth && metay > foody && metay < foody + foodHeight){
     document.getElementById("food").setAttribute("x", val1);
     foodCounter = foodCounter + 1;
     document.getElementById("text4").textContent = foodCounter;
   }
   if(metax > food1x && metax < food1x + food1Width && metay > food1y && metay < food1y + food1Height){
     document.getElementById("food1").setAttribute("x", val1);
     foodCounter = foodCounter + 1;
     document.getElementById("text4").textContent = foodCounter;
   }
 if (foodCounter == 5) {
   document.getElementById("game").pauseAnimations();
   var timeStop = Date.now();
   var endTime;
   endTime = (timeStop-timeStart)/1000;
   document.getElementById("text1").textContent = endTime;

 }
})
