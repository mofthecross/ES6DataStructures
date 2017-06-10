const BaseNode = require('./baseNode.js');

class Node extends BaseNode {
	constructor(value) {
		super(value);
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearchTree {
	constructor(){
		this.root = null;
    this.size = 0;
	}

  insert(value) {
    if(!this.root) {
      this.root = new Node(value);
      this.size++;
    } else {
      let currentNode = this.root;

      while(currentNode !== null) {

        if (value < currentNode.value) {
          if (currentNode.leftChild === null) {
            currentNode.leftChild = new Node(value);
            this.size++;
            break;
          } else {
            currentNode = currentNode.leftChild;
          }
        } else {
          if (currentNode.rightChild === null) {
            currentNode.rightChild = new Node(value);
            this.size++;
            break;
          } else {
            currentNode = currentNode.rightChild;
          }
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;
    while (currentNode) {
      if(currentNode.value === value) {
        return true;
      }
      if (currentNode.value > value) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    return false;
  }
}


module.exports.Node = Node;
module.exports.BinarySearchTree = BinarySearchTree;
