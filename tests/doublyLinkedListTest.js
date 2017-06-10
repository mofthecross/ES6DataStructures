const expect = require('chai').expect;
const test = require('../dataStructures/doublyLinkedList.js');


describe('Node class', function() {
  it('should instantiate a node class', function() {
    expect(new test.Node).to.be.an('object');
    expect(new test.Node).to.be.an.instanceof(test.Node);
  });

  it('should have a next and prev properties set initially to null', function() {
    const Node = new test.Node();
    expect(Node.next).to.equal(null);
    expect(Node.prev).to.equal(null);
  });

  it('should assign the value passed in as an argument to the data propety', function() {
    const Node = new test.Node('a new value');
    expect(Node.value).to.equal('a new value');
  });
});

describe('DoublyLinkedList class', function() {
  it('should instantiate a DoublyLinkedList class', function() {
    expect(new test.DoublyLinkedList).to.be.an('object');
    expect(new test.DoublyLinkedList).to.be.an.instanceof(test.DoublyLinkedList);
  });

  it('should have head and tail and length properties initially set to null and 0 respectively', function() {
    let DLL = new test.DoublyLinkedList();
    expect(DLL._head).to.equal(null);
    expect(DLL._tail).to.equal(null);
    expect(DLL._length).to.equal(0);
  });

  it('should have a prepend method that inserts and assigns a new node to the head', function() {
    let DLL = new test.DoublyLinkedList();
    [1,2,3,4,5,6,7,8,9,10].forEach( num => DLL.prepend(num));

    expect(DLL._head.value).to.equal(10);
    expect(DLL._tail.value).to.equal(1);
    expect(DLL._length).to.equal(10);
  });

  it('should have a prepend method that inserts and assigns a new node to the tail', function() {
    let DLL = new test.DoublyLinkedList();
    [1,2,3,4,5,6,7,8,9,10].forEach( num => DLL.append(num));

    expect(DLL._head.value).to.equal(1);
    expect(DLL._tail.value).to.equal(10);
    expect(DLL._length).to.equal(10);
  });

  it('should have a size method that returns the size of the list', function() {
    let DLL = new test.DoublyLinkedList();
    [1,2,3,4,5,6,7,8,9,10].forEach( num => DLL.append(num));

    expect(DLL.size()).to.equal(10);
  });

  it('should return a node with value passed in after append and prepend is invoked', function() {
    let DLL = new test.DoublyLinkedList();
    DLL.append('MDLC');

    let headNode = DLL.prepend('is spinning!');
    expect(headNode).to.equal(DLL._head);

    let tailNode = DLL.append('1337');
    expect(tailNode).to.equal(DLL._tail);

  });

  it('should have a remove method for a given node', function() {
    let DLL = new test.DoublyLinkedList();
    let head = DLL.append('You');
    DLL.append('gotta');
    DLL.append('dig');
    DLL.append('deep!');

    expect(DLL.size()).to.equal(4);
    DLL.remove(head);
    expect(DLL.size()).to.equal(3);
    expect(DLL._head.value).to.equal('gotta');
    DLL.remove(DLL._tail);
    expect(DLL.size()).to.equal(2);
    let reallyDeep = DLL.append('like really deep');
    let willBeRemoved = DLL.append('almost there');
    DLL.append('tribe has spoken');
    expect(DLL.size()).to.equal(5);
    expect(DLL._tail.value).to.equal('tribe has spoken');
    DLL.remove(willBeRemoved);
    expect(reallyDeep.next.value).to.equal('tribe has spoken');
    expect(DLL.size()).to.equal(4);
  });
});
