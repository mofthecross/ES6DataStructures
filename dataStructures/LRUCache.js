/*
Design and implement a data structure for Least Recently Used (LRU) cache.
It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key
exists in the cache, otherwise return -1.

set(key, value) - Set or insert the value if the key is not already present.
When the cache reached its capacity, it should invalidate the least recently
used item before inserting a new item.
*/

const DoublyLinkedList = require('./doublyLinkedList.js').DoublyLinkedList;
const stringify = require('../utils.js').stringify;

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.storage = {};
    this.list = new DoublyLinkedList();
    this.size = this.list.size();
  }

  get(key) {
    if (key in this.storage) {
      let data = this.storage[key].value;
      this.set(key, data);
      return data[1];
    } else {
      return - 1;
    }
  }

  set(key, value) {
    //remove node from hashmap
    if (key in this.storage) {
      let node = this.storage[key];
      this.list.remove(node);
    }

    if (this.limit === this.size) {
      const leastRecentlyUsed = this.list.remove(this.list.tail());
      delete this.storage[leastRecentlyUsed.value[0]];
    }
    // store key and value in dll as tuple/array such that:
    // index 0 = key and index 1 = actual value;
    // prepend method on DLL returns the newly added node;
    const node = this.list.prepend([key, value]);
    this.storage[key] = node;
  }
}
