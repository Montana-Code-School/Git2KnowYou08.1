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
  alert(date);
}
dateButton.addEventListener('click', whyNot);
console.log(date);
