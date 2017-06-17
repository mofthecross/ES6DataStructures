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
    // if key already exists in the bucket update override the current value;
      bucket.forEach( tuple => {
        if (tuple[0] === key) {
          tuple[1] = value;
          return;
        }
      });
    // otherwise just a new key value pair in bucket;
      bucket.push([key, value]);
    }
    this.size++;
  }

  delete(key) {
    let index = this.hash(key, this.buckets);
    let bucket = this.storage[index] || [];
    if (bucket.length === 0) {
      return;
    } else {
      bucket.forEach( tuple => {
        if (tuple[0] === key) {
          delete tuple;
          this.size--;
        }
      });
    }
  }

  retrieve(key) {
    let index = this.hash(key, this.buckets);
    let bucket = this.storage[index] || [];

    if (bucket.length === 0) {
      return null;
    } else {
      bucket.forEach( tuple => {
        if (tuple[0] === key) {
          return tuple[1];
        }
      })
    }
  }

  resize(newBucketLimit) {
    let tempStorage = [];
    //put all tuples in tempStorage;
    this.storage.forEach( bucket => {
      if (bucket !== undefined) {
        bucket.forEach( tuple => {
          tempStorage.push(tuple);
        });
      }
    });
    //asign new bucket limit, empty storage, reset size to 0;
    this.buckets = newBucketLimit;
    this.storage = [];
    this.size = 0;

    // re-insert all the pairs in the storage with new bucket limit
    tempStorage.forEach( tuple => {
      this.insert(tuple[0], tuple[1]);
    });
  }

}
