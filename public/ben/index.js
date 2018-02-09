console.log("Booger");
var date = new Date;
var dateButton = document.createElement("button");
dateButton.setAttribute("type", "date");
dateButton.name = "DateButton";
dateButton.id = "hello";
dateButton.style.backgroundColor = "black";
dateButton.innerText = "Date";
dateButton.style.color = "white";
dateButton.style.fontSize = "200px";
dateButton.style.backgroundImage = "url ('http://cdn6.bigcommerce.com/s-8gyotsl3/products/2103/images/2256/eyeclock3__94577.1419757250.450.500.jpg?c=2')";
dateButton.style.width = "auto";
document.body.appendChild(dateButton);
function whyNot(){
  var birthDate = new Date ('1996-03-02T12:30:30Z')
  var age = date - birthDate;
  var time = age / (1000 * 60 * 60 * 24) / 365;
  var longTime = 140 * (1000 * 60 * 60 * 24);
  var deathTime = longTime - time;

  alert(deathTime);
}
dateButton.addEventListener('click', whyNot);
console.log(date);
