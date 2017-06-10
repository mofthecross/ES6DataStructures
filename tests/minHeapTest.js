const expect = require('chai').expect;
const MinHeap = require('../main/heap.js').MinHeap;

describe('min heap tree class ', () =>  {

  describe('MinHeap properties', () =>  {
    it('should have properties storage', () =>  {
      const test = new MinHeap();
      expect(test).to.have.property('storage');
      expect(test.storage.length).to.equal(0);
    });
  });

  describe('MinHeap methods existence', () => {
    it('should have methods insert, swap, bubbleUp, bubbleDown, peak, removePeak, size, getParentIndex, getChildrenIndeces, getMasterChildIndex', () => {
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


  describe('MinHeap insert method', () => {
    it('should be able to insert a single value and return peak value ', () => {
      const test = new MinHeap();

      expect(test.size()).to.equal(0);

      test.insert(5);
      expect(test.peak()).to.equal(5);
      expect(test.size()).to.equal(1);
    });

    it('should be able to insert a second value', () => {
      const test = new MinHeap();

      expect(test.size()).to.equal(0);

      test.insert(5);
      expect(test.peak()).to.equal(5);
      expect(test.size()).to.equal(1);

      test.insert(10);
      expect(test.peak()).to.equal(5);
      expect(test.size()).to.equal(2);
    });
  });

  describe('MinHeap removePeak method', () => {
    it('should delete a value and reogarnize elements according to min heap rules', () => {
/*
              0
             /  \
           1      7
         /  \    /  \
        2    5  8    10
      /
      9
      index:  0 1 2 3 4 5  6 7
      array: [0,1,7,2,5,8,10,9];
*/
      const test = new MinHeap();
      [0,1,7,2,5,8,10,9].map(function(value) {
        test.insert(value);
      });

      expect(test.peak() === 0).to.equal(true);
      test.removePeak();
      expect(test.peak()).to.equal(1);
      test.insert(0);
    });
  });

});
