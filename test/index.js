try {
  var omit = require('omit');
} catch (e) {
  var omit = require('..');
}

var assert = require('assert');

describe('omit', function(){
  it('should omit keys', function(){
    var obj = { one: 1, two: 2, three: 3 };
    assert.deepEqual({ two: 2 }, omit(['one', 'three'], obj));
  });

  it('should return a clone', function(){
    var obj = { one: 1 };
    assert.notEqual({ one: 1 }, omit('one', obj));
    assert.deepEqual({ one: 1 }, omit('one', obj));
  });

  it('should not omit non-existent keys', function(){
    var obj = { one: 1 };
    assert.deepEqual({ one: 1 }, omit('two', obj));
  });
});