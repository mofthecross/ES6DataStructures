class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }
  push(data) {
    this._storage[this._length] = data;
    this._length++;
  }
}

let newStack = new Stack();
newStack.push('8');
console.log(newStack);
