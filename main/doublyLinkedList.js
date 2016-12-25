class Node {
  constructor(value) {
    this.data = value;
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
    let node = new Node(value);
    
    if (this._length === 0) {
      this._head = this._tail = node;
    } else {
      this._head.prev = node;
      node.next = this._head;
      this._head = node;
    }
    this._length++;
  }
}


module.exports.Node = Node;
module.exports.DoublyLinkedList = DoublyLinkedList
