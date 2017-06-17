class HashTable {
  constructor() {
    // The max number of buckets that your storage can contain.     *
    // "buckets" is initialized at 8 buckets.
    this.buckets = 8;
    this.size = 0;
    this.storage = [];
  }

  hash(str, buckets) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      // hash * 33 + c
      hash = ((hash << 5) + hash) + char;
    }
    return hash % buckets;
  }

  size() {
    return this.size;
  }
  // adds a key-value pair
  insert(key, value) {
    let index = this.hash(key, this.buckets);
    let bucket = this.storage[index] || [];
    // if bucket is empty add key value pair as tuple;
    if (bucket.length === 0) {
      bucket.push([key, value]);
    } else {
    // if key already exists in the bucket returns
      bucket.forEach( tuple => {
        if (tuple[0] === key) {
          tuple[1] = value;
          return;
        }
      });
      bucket.push([key, value]);
    }
    this.size++;
  }

}
