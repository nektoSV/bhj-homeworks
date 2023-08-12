let clickCount = 0;
const element = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

  
    element.onclick = () => {
    counter.textContent = clickCount += 1;
   if(clickCount % 2 === 0) {
    element.width = 200;
   } else {
    element.width = 250;
   }
 
}