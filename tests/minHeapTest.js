const expect = require('chai').expect;
const MinHeap = require('../main/heap.js').MinHeap;

describe('min heap tree class ', function() {

  describe('MinHeap properties', function() {
    it('should have properties storage', function() {
      const test = new MinHeap();
      expect(test).to.have.property('storage');
      expect(test.storage.length).to.equal(0);
    });
  });
});
