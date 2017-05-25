greetMe();
myFunction();
counter();

var reset = document.getElementById("reset");
reset.addEventListener('click', function(){
  localStorage.count = 0;
  output.innerHTML = localStorage.count;
}, false);
