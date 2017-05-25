var count = document.getElementById("greet");
var output = document.getElementById("output");
var namesGreeted = {};

var counter = function() {

if(typeof(localStorage.count) === 'undefined'){
  localStorage.setItem('count', count);
}
  output.innerHTML = localStorage.count;

if(localStorage.getItem('namesGreeted') === null){
  localStorage.setItem('namesGreeted', '{}');
}
