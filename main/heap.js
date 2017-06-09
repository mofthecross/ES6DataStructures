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

  /*
            0
           /  \
         1      7
       /  \    /  \
      2    5  8    10
     /
    9
    index:  0 1 2 3 4 5  6 7
    array: [0,1,7,2,5,8,10,9];

    to find parent's children in array consider the ff:
      leftChildIndex: 2 * parent + 1
      rightChildIndex: (2 * parent) + 2;
      ex:
          parenIndex:
              2 -> [7];
          leftChildIndex:
              (2 * 2) + 1 = 5 -> [8]
          rightChildIndex:
              (2 * 2) + 2 = 6 -> [10]

    to find child's parent in array, consder the ff:
      childIndex is odd:
         parentIndex: (childIndex - 1) / 2
      childIndex is even:
         parentIndex: (childIndex - 2) / 2
      ex:
          childIndex: 5 -> [8]
            parentIndex: (5 - 1) / 2 = 2 -> [7]
          childINdex: 6 -> [10]
            parentIndex: (6 - 2) / 2 = 2 -> [7]
  */

  getParentIndex(childIndex) {
    let parentIndex;
    if (childIndex % 2 === 0) {
      parentIndex = (childIndex - 2) / 2;
    } else {
      parentIndex = (childIndex - 1) / 2;
    }
    return parentIndex;
  }

  removePeak() {
    let firstIndex = 0;
    let lastIndex = this.storage.length - 1;
    this.swap(firstIndex, lastIndex);
    const toReturn = this.storage.pop();
    this.bubbleDown(firstIndex);
    return toReturn;
  }

  bubbleDown(parentIndex) {
    let masterChildIndex = this.getMasterChildIndex(parentIndex);

    while(parentIndex < this.size() - 1 && masterChildIndex !== -1 &&
     this.storage[parentIndex] > this.storage[masterChildIndex]) {

       this.swap(parentIndex, masterChildIndex);
       parentIndex = masterChildIndex;
       masterChildIndex = this.getMasterChildIndex(parentIndex);

    }
    return;
  }

}

module.exports.MinHeap = MinHeap;
