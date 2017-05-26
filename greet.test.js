describe('greetMe()', function() {
  it('Should take the last name added to local storage and greet in the appropriate selected language', function() {
    var display = document.getElementById("display");


    var selectedRadio = document.querySelector("input[name='language']:checked")
    if (selectedRadio) {
      display = selectedRadio + name;
    }

    assert.equal(display = selectedRadio + name, display)
  });
});
