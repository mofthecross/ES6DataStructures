const expect = require('chai').expect;
const BinarySearchTree = require('../main/binarySearchTree.js').binarySearchTree;
const Node = require('../main/binarySearchTree.js').Node;



describe('binary search tree node', function() {

  describe('creation of a node', function() {
    it('should exist: ', function() {
      var test = new Node();

      expect(test).to.not.equal(undefined);
    });
  });

  describe('encoding a value', function() {
    it('should store a value: ', function() {
      var test = new Node();

      expect(test).to.have.property('value');
      expect(test.value).to.equal(null);

      test.value = 3;
      expect(test.value).to.equal(3);
    });
  });

  describe('pointing to another node', function() {
    it('should be able to point to another node: ', function() {
      var initial = new Node(5);
      var rightTarget = new Node(10);
      var leftTarget = new Node(2);

      expect(initial).to.have.property('value');
      expect(initial).to.have.property('rightChild');
      expect(initial).to.have.property('leftChild');
      expect(initial.rightChild).to.equal(null);
      expect(initial.leftChild).to.equal(null);

      initial.rightChild = rightTarget;
      initial.leftChild = leftTarget;

      expect(initial.rightChild.value).to.equal(10);
      expect(initial.leftChild.value).to.equal(2);

    });
  });
});

describe('binary search tree class ', function() {

  describe('BinarySearchTree properties', function() {
    it('should have properties root and size', function() {
      var test = new BinarySearchTree();

      expect(test).to.have.property('root');
      expect(test).to.have.property('size');
      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);
    });
  });

  describe('BinarySearchTree methods existence', function(){
    it('should have methods insert and search', function(){
      var test = new BinarySearchTree();

      expect(test).to.respondTo('insert');
      expect(test).to.respondTo('search');
    });
  });

  describe('BinarySearchTree insert method', function(){
    it('should be able to insert a single node', function(){
      var test = new BinarySearchTree();

      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);

      test.insert(5);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild).to.equal(null);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(1);
    });

    it('should be able to insert a second node', function(){
      var test = new BinarySearchTree();

      expect(test.root).to.equal(null);
      expect(test.size).to.equal(0);

      test.insert(5);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild).to.equal(null);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(1);

      test.insert(10);

      expect(test.root.value).to.equal(5);
      expect(test.root.rightChild.value).to.equal(10);
      expect(test.root.leftChild).to.equal(null);
      expect(test.size).to.equal(2);
    });
  });

  describe('BinarySearchTree search method', function(){
    it('should return true when the node exists', function(){
      var test = new BinarySearchTree();
      test.insert(5);
      test.insert(10);

      expect(test.search(5)).to.equal(true);
    });

    it('should return false when the node does not exist', function(){
      var test = new BinarySearchTree();
      test.insert(5);
      test.insert(10);

      expect(test.search(17)).to.equal(false);
    });
  });

  // describe('BinarySearchTree remove method', function(){
  //   it('should delete a node', function(){
  //     var test = new BinarySearchTree();
  //     [5,10,2,7,1].map(function(value) {
  //       test.insert(value);
  //     });
  //
  //     expect(test.search(7)).to.equal(true);
  //
  //     test.remove(7);
  //
  //     expect(test.search(7)).to.equal(false);
  //
  //   });
  //
  //   it('should modify the size when deleting a node', function(){
  //     var test = new BinarySearchTree();
  //     [5,10,2,7,1].map(function(value) {
  //       test.insert(value);
  //     });
  //
  //     expect(test.size).to.equal(5);
  //     test.remove(7);
  //     expect(test.size).to.equal(4);
  //   });
  // });

});
