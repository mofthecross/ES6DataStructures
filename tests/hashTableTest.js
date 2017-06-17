const HashTable = require('../dataStructures/hashTable.js');
const expect = require('chai').expect;

describe('hash table class ', () =>  {

  describe('hashTable properties', () =>  {
    it('should have properties storage, buckets, and size', () =>  {
      const test = new HashTable();

      expect(test).to.have.property('storage');
      expect(test).to.have.property('buckets');
      expect(test).to.have.property('size');
      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);
    });
  });

  describe('hashTable methods existence', () => {
    it('should have methods hash, insert, delete, and retrieve', () => {
      const test = new HashTable();

      expect(test).to.respondTo('hash');
      expect(test).to.respondTo('insert');
      expect(test).to.respondTo('delete');
      expect(test).to.respondTo('retrieve');
    });
  });

  describe('hashTable hash method', () => {
    it('should return an index from an inputted string and bucket limit of 8', () => {
      const test = new HashTable();

      const expected = test.hash('hello', 8);
      expect(expected).to.equal(1);
    })
  });

})
