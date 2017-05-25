var display = document.getElementById("display");
var language = document.getElementById("language");
var greetMeButton = document.getElementById("greet");
var txtName=  document.getElementById("txtName");



greetMeButton.addEventListener('click',
function greetMe(){
  var name = txtName.value;
  var selectedRadio = document.querySelector("input[name='language']:checked")
  if (selectedRadio){
    display.innerHTML = selectedRadio.value + name;
  }
  var namesGreeted = JSON.parse(localStorage.getItem('namesGreeted'));
  if(namesGreeted[name] === undefined && name.length>0){
    localStorage.count++;
    output.innerHTML = localStorage.count;
    namesGreeted[name] = true;
    localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));

  }
}, false);
