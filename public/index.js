var square = document.getElementsByClassName("square");
for (var i = 0; i < square.length; i++) {
  console.log(square[i]);
  square[i].addEventListener("click", function(){
    console.log("this works");
    document.body.style.backgroundColor = "red";
    document.getElementsByClassName('clickMe').style.backgroundColor = '#bdce00'
  });
}
$("#header")
.on( "mouseenter", function() {
  $(this).text("Better!");
})
.on( "mouseleave", function(){
  $(this).text("Git To Know You!!");
});


//clickMe = document.getElementsByClassName('clickMe').style.background='#bdce00';
console.log(square);
// function doDemo(){
// var button = this;
// square.style.backgroundColor = '#bdce00';
// button.setAttribute("disabled", "true");
// setTimeout(clearDemo, 2000, button);
// }
//
// function clearDemo (button) {
//   var square = document.getElementsByClass('square');
//   square.style.backgroundColor = "transparent";
//   button.removeAttribute("disabled");
// }
//
// clickMe.onclick = doDemo;
