class MinHeap {
  constructor() {
    this.storage = [];
  }

  size() {
    return this.storage.length;
  }

  //swap two items in the 'tree';
  swap(index1, index2) {
    const temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  //returns the 'root/top' item in the 'tree';
  peak() {
    return this.storage[0];
  }

  insert(item) {
    this.storage.push(item);
    this.bubbleUp(this.storage.length - 1);
  }

  bubbleUp(childIndex) {
    let parentIndex = this.getParentIndex(childIndex);

    while(childIndex > 0 && this.storage[parentIndex] > this.storage[childIndex]) {
      this.swap(childIndex, parentIndex);
      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

}

module.exports.MinHeap = MinHeap;
