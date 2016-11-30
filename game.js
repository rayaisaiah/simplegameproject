//time
var timeStart = Date.now();
//ending
 var endTime
var endend = "YOU WIN!"
//X
var foodCounter = 0;
var metax = Number(document.getElementById("kirby").getAttribute("x"));
var metay = Number(document.getElementById("kirby").getAttribute("y"));
//speed
var appleSpeed = 12;
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
     appleSpeed*=0.9;
     document.getElementById("food").setAttribute("x", val1);
     foodCounter = foodCounter + 1;
     document.getElementById("text4").textContent = foodCounter;
     document.getElementById("1").setAttribute("dur", appleSpeed);
     document.getElementById("2").setAttribute("dur", appleSpeed);
   }
   if(metax > food1x && metax < food1x + food1Width && metay > food1y && metay < food1y + food1Height){
     appleSpeed*=0.9;
     document.getElementById("food1").setAttribute("x", val1);
     foodCounter = foodCounter + 1;
     document.getElementById("text4").textContent = foodCounter;
     document.getElementById("1").setAttribute("dur", appleSpeed);
     document.getElementById("2").setAttribute("dur", appleSpeed);
   }
   if (foodCounter == 10) {
     document.getElementById("game").setAttribute("style", "background-image: url('http://vignette3.wikia.nocookie.net/kirby/images/8/8e/KRtDL_Dream_Land.png/revision/latest?cb=20111002085713&path-prefix=en')");
   }
 if (foodCounter == 20) {
   document.getElementById("game").pauseAnimations();
   var timeStop = Date.now();
   endTime;
   endTime = (timeStop-timeStart)/1000;
   document.getElementById("text1").textContent = endTime;
   document.getElementById("end").textContent = endend;
 }
})
