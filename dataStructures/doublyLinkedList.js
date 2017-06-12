const BaseNode = require('./baseNode.js');

class Node extends BaseNode {
  constructor(value) {
    super(value);
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this._length === 0) {
      this._head = this._tail = newNode;
    } else {
      const oldHead = this._head;
      newNode.next = oldHead;

      oldHead.prev = newNode;

      this._head = newNode;
    }
    this._length++;
    return this._head;
  }

  append(value) {
    let node = new Node(value);

    if (this._length === 0) {
      this._head = this._tail = node;

    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._length++;
    return this._tail;
  }

  size() {
    return this._length;
  }

  remove(node) {
    if (this._head.value === node.value) {
      this._head = this._head.next;
    } else if (this._tail.value === node.value) {
      this._tail = this._tail.prev;
      this._tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this._length--;
    if (this._length === 0) {
      this._head = this._tail = null;
    }
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }
}

module.exports.Node = Node;
module.exports.DoublyLinkedList = DoublyLinkedList;
