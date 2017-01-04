const expect = require('chai').expect;
const test = require('../main/stack.js');

describe('stack class', function(){
  it('should instantiate stack class', function(){
    expect(new test.Stack).to.be.an('object');
    expect(new test.Stack).to.be.an.instanceof(test.Stack);
  });
  describe('stack properties', function(){
    it('should have a length property', function(){
      const stack = new test.Stack();
      expect(stack).to.have.property('length');
    });
  });
  describe('stack class method existance', function(){
    it('should have push and pop properties ', function(){
      const stack = new test.Stack();
      expect(stack).to.respondTo('push');
      expect(stack).to.respondTo('pop');
    });
  });
  describe('push', function(){
    it('should increase the length by one every time a value is pushed', function(){
      const stack = new test.Stack();
      ['Adam', 'Michelle', 'Jeremy', 'Mike', 'Tony'].forEach(name =>{
        stack.push(name);
      });
      expect(stack.length).to.equal(5);
    });
  });
  
  describe('pop', function(){
    it('should return the most recently added value', function(){
      const stack = new test.Stack();
      ['Boston Rob', 'Cochran', 'Tyson'].forEach(name =>{
        stack.push(name);
      });
      expect(stack.pop()).to.equal('Tyson');
    });

    it('should decrease the length by one every time pop is invoked', function(){
      const stack = new test.Stack();
      ['Adam', 'Michelle', 'Jeremy', 'Mike', 'Tony'].forEach(name =>{
        stack.push(name);
      })
      stack.pop();
      expect(stack.length).to.equal(4);
      stack.pop();
      expect(stack.length).to.equal(3);
    });

    it('should return undefined pop is invoked on an empty stack', function(){
      const stack = new test.Stack();
      ['Adam', 'Michelle'].forEach(name =>{
        stack.push(name);
      })
      stack.pop();
      expect(stack.length).to.equal(1);
      stack.pop();
      expect(stack.length).to.equal(0);
      expect(stack.pop()).to.equal(undefined);
    });
  });
});
