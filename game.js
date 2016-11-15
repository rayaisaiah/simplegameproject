//movement
var metax = Number(document.getElementById("meta").getAttribute("x"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
    document.getElementById("meta").setAttribute("x",metax-10)
  metax = metax-10
 }
 else if (e.keyCode == 39){
   document.getElementById("meta").setAttribute("x",metax+10)
  metax = metax+10
 }

})
var metay = Number(document.getElementById("meta").getAttribute("y"));
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 38) {
    document.getElementById("meta").setAttribute("y",metay-10)
  metay = metay-10
 }
 else if (e.keyCode == 40){
   document.getElementById("meta").setAttribute("y",metay+10)
  metay = metay+10
 }

})
