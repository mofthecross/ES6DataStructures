class Stack {
  constructor() {
    this._storage = {};
    this.length = 0;
  }
  push(data) {
    this._storage[this.length + 1] = data;
    this.length++;
  }
  pop() {
    if (this.length > 0) {
      const deleted = this._storage[this.length];
      delete this._storage[this.length];
      this.length--;
      return deleted;
    }
  }
}

module.exports.Stack = Stack;
