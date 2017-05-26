describe('saveName()', function(){
it('Shoulld store the name entered into localStorage', function(){
  var txtName = document.getElementById("txtName");
  if(txtName > 0){
    namesGreeted.push(document.getElementById("txtName"));
  }

var names = localStorage.getItem("namesGreeted");
localStorage.getItem("namesGreeted", namesGreeted);

assert.equal(namesGreeted = txtName, names)
});
});
