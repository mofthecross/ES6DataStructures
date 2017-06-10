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

  describe('MinHeap methods existence', function(){
    it('should have methods insert, swap, bubbleUp, bubbleDown, peak, removePeak, size, getParentIndex, getChildrenIndeces, getMasterChildIndex', function(){
        const test = new MinHeap();
        expect(test).to.respondTo('insert');
        expect(test).to.respondTo('swap');
        expect(test).to.respondTo('bubbleUp');
        expect(test).to.respondTo('bubbleDown');
        expect(test).to.respondTo('peak');
        expect(test).to.respondTo('removePeak');
        expect(test).to.respondTo('size');
        expect(test).to.respondTo('getParentIndex');
        expect(test).to.respondTo('getChildrenIndeces');
        expect(test).to.respondTo('getMasterChildIndex');
        expect(test).to.respondTo('size');
    });
  });
});
