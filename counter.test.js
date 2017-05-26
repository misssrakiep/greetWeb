var count = document.getElementById("greet");
var output = document.getElementById("output");
var namesGreeted = {};

describe('counter()', function() {
  it('Should count the number of times the greet function has been used', function() {
    if (typeof(localStorage.count) === 'undefined') {
      localStorage.setItem('count', count);
    }
    // output.innerHTML = localStorage.count;

    if (localStorage.getItem('namesGreeted') === null) {
      localStorage.setItem('namesGreeted', '{}');
    }
    return localStorage.count;
    assert.equal(localStorage.count == namesGreeted.length, localStorage.count);
  });
});

describe('nameCount()', function(){
  it('Should increment the counter everytime a new name is added', function(){
    var namesGreeted = JSON.parse(localStorage.getItem('namesGreeted'));
    if (namesGreeted[name] === undefined && name.length > 0) {
      localStorage.count++;
      // output.innerHTML = localStorage.count;
      namesGreeted[name] = true;
      localStorage.setItem('namesGreeted', JSON.stringify(namesGreeted));

    }
    assert.equal(localStorage.count++, 0);
  });
});
