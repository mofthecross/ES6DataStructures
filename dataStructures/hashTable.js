class HashTable {
  constructor() {
    // The max number of buckets that your storage can contain.     *
    // "buckets" is initialized at 8 buckets.
    this.buckets = 8;
    this.size = 0;
    this.storage = [];
  }

  hash (str, buckets) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      // hash * 33 + c
      hash = ((hash << 5) + hash) + char;
    }
    return hash % buckets;
  }
}
