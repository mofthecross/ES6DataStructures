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

})
