class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }
  push(data) {
    this._storage[this._length + 1] = data;
    this._length++;
  }
  pop() {
    if (this._length > 0) {
      const deleted = this._storage[this._length];
      delete this._storage[this._length];
      this._length--;
      return deleted;
    }
  }
}

let newStack = new Stack();
newStack.push('8');
newStack.pop()
console.log(newStack);
