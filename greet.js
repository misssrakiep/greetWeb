var display = document.getElementById("display");
var language = document.getElementById("language");
var greetMeButton = document.getElementById("greet");
var txtName=  document.getElementById("txtName");
var count = document.getElementById("greet");
var output = document.getElementById("output");

var namesGreeted = {};

// language.addEventListener('change', function(e){
//   lang=e.target.value;
// });

window.onload = function() {

if(typeof(localStorage.count) === 'undefined'){
  localStorage.setItem('count', count);
}
  output.innerHTML = localStorage.count;

if(localStorage.getItem('namesGreeted') === null){
  localStorage.setItem('namesGreeted', '{}');
}

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
}



var reset = document.getElementById("reset");
reset.addEventListener('click', function(){
  localStorage.count = 0;
  output.innerHTML = localStorage.count;
}, false);








// greet.addEventListener("click", function(){




// output.value = localStorage.counter  ;

// localStorage.setItem('counter', counter);
// }, false);

//




// localStorage.setItem("namesGreeted", namesGreeted);

function myFunction(){
var x = document.getElementById("display");
namesGreeted.push(document.getElementById("txtName").value);
}
  var names = localStorage.getItem("namesGreeted");
localStorage.getItem("namesGreeted", namesGreeted);

// // var arr = namesGreeted;
// // var sorted_arr = namesGreeted.slice().sort();
// // var results = [];
// // for (var i = 0; i < arr.length - 1; i++) {
// //     if (sorted_arr[i + 1] == sorted_arr[i]) {
// //         results.push(sorted_arr[i]);
// //     }
// //     if (sorted_arr[i] == results[i]){
// // localStorage.counter-1;
// //   }
// // }




// //
// // output.value = localStorage.counter  ;
// //
// // localStorage.setItem('counter', counter);
// // }, false);
