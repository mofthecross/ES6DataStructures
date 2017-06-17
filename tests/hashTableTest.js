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

  describe('hashTable insert method', () => {
    const test = new HashTable();

    expect(test.storage.length).to.equal(0);
    expect(test.size).to.equal(0);

    test.insert('hello', 'world');
    it('should be able to insert a key-value pair', () => {
      expect(test.size).to.equal(1);
      expect(test.storage[1][0][0]).to.equal('hello');
      expect(test.storage[1][0][1]).to.equal('world');
    });

    it('should be able to insert a second key-value pair', () => {

      test.insert('good', 'luck');

      expect(test.size).to.equal(2);
      expect(test.storage[6][0][0]).to.equal('good');
      expect(test.storage[6][0][1]).to.equal('luck');
    });

    it('should be able to handle collisions', () => {
      const test = new HashTable();
      expect(test.storage.length).to.equal(0);
      expect(test.size).to.equal(0);

      test.insert('good', 5);

      expect(test.size).to.equal(1);
      expect(test.storage[6][0][0]).to.equal('good');
      expect(test.storage[6][0][1]).to.equal(5);

      test.insert('back', 10);
      expect(test.size).to.equal(2);
      expect(test.storage[6][1][0]).to.equal('back');
      expect(test.storage[6][1][1]).to.equal(10);
    });

  });
  describe('hashTable delete method', () => {
    const test = new HashTable();

    expect(test.storage.length).to.equal(0);
    expect(test.size).to.equal(0);

    it('should delete a key-value pair', () => {
      test.insert('hello', 'is it me you are looking for?');
      expect(test.size).to.equal(1);
      expect(test.storage[1][0][0]).to.equal('hello');
      expect(test.storage[1][0][1]).to.equal('is it me you are looking for?');

      test.delete('hello');
      expect(test.size).to.equal(0);
    });

    it('should not modify the size when deleting a key-value pair that does not exist', () => {
      test.insert('hello', 'can you hear me?');
      test.insert('hallo', 'is it me you are looking for?');
      expect(test.size).to.equal(2);

      test.delete('great');
      expect(test.size).to.equal(2);
    });
  });

  describe('hashTable retrieve method', () => {
    const test = new HashTable();
    it('should return true for a key-value pair that exists', () => {
      test.insert('hello', 'from the other side');

      expect(test.retrieve('hello')).to.equal('from the other side');
    });

    it('should return false for a key-value pair that does not exist', () => {
      expect(test.retrieve('good')).to.equal(null);
    });
  });

  describe('hashTable resize method', () => {
    const test = new HashTable();

    test.insert('michael', 1);
    test.insert('jack', 10);
    test.insert('jake', 2);
    test.insert('aja', 3);
    test.insert('skyler', 8);
    test.insert('francisco', 1);
    test.insert('jasmine', 1);
    test.insert('yuri', 1);
    test.insert('sagaree', 1);
    test.insert('aditi', 1);
    
    it('should double the number of buckets when the size exceeds 75% of buckets capacity', () => {
      expect(test.buckets).to.equal(16);
    });

    it('should halve the number of buckets when the size drops below 25% of bucket capacity', () => {
      test.delete('michael');
      test.delete('jack');
      test.delete('francisco');
      test.delete('jake');
      test.delete('skyler');
      test.delete('yuri');
      test.delete('aja');
      expect(test.buckets).to.equal(8);
    });
  });

})
