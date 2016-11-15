//movement
var metax = Number(document.getElementById("meta").getAttribute("x"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37 && metax + 10 > 0) {
    document.getElementById("meta").setAttribute("x",metax-10)
  metax = metax-10
 }
 else if (e.keyCode == 39 && metax + 10 <200 ){
   document.getElementById("meta").setAttribute("x",metax+10)
  metax = metax+10
 }

})
var metay = Number(document.getElementById("meta").getAttribute("y"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 38 && metay + 10 > 0) {
    document.getElementById("meta").setAttribute("y",metay-10)
  metay = metay-10
 }
 else if (e.keyCode == 40 && metay + 10 < 95){
   document.getElementById("meta").setAttribute("y",metay+10)
  metay = metay+10
 }

})
