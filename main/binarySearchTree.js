class Node {
	constructor(value) {
		this.value = !value ? null : value;
		this.left = null;
		this.right = null;
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
      while(currentNode.value) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = new Node(value);
            this.size++;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = new Node(value);
            this.size++;
            break;
          } else {
            currentNode = currentNode.right;
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
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
