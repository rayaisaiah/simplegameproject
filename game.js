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
