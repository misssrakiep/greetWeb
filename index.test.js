

var reset = document.getElementById("reset");

describe('reset()', function(){
  it('Should reset the counter to 0', function(){
      localStorage.count = 0;

    assert.equal(localStorage.count = 0, localStorage.count)
  });
});
