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

}

module.exports.MinHeap = MinHeap;
