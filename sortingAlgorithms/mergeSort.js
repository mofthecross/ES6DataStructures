function mergeSort(array) {

  function merge(array1, array2) {
    const result = [];
    let p1 = 0;
    let p2 = 0;

    while(p1 < array1.length && p2 < array2.length) {
      let array1Item = array1[p1];
      let array2Item = array2[p2];

      if (array1Item <= array2Item) {
        result.push(array1Item);
        p1++;
      } else {
        result.push(array2Item);
        p2++;
      }
    }

    if (p1 === array1.length){
        while (p2 < array2.length){
          result.push(array2[p2]);
          p2++;
        }
      } else {
        while (p1 < array1.length){
          result.push(array1[p1]);
          p1++;
        }
      }

    return result;
  }

  function divide(array) {
    if (array.length < 2) {
      return array;
    }
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return merge(divide(left), divide(right));
  }

  return divide(array);
}

module.exports.mergeSort = mergeSort;
