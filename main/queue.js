class Queue {
  constructor() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
  }
  enqueue(value) {
    this._storage[this._newestIndex] = value;
    this._newestIndex++;
  }
  dequeue(value) {
    if (this._oldestIndex !== this._newestIndex) {
      const dequeued = this._storage[this._oldestIndex];
      delete this._storage[this_oldestIndex];
      this._oldestIndex = this._oldestIndex++;
      return dequeued
    }
  }
  size() {
    return this._newestIndex - this._oldestIndex;
  }
}

module.exports.Queue = Queue;
