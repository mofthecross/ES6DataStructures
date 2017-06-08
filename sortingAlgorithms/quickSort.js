function quickSort(array) {
  function subSort(start, end) {
    let mid = 0;
    if (start >= end) {
      return;
    }

    for (let i = 0; i < end; i++) {
      if (array[i] < array[end]) {
        let temp = array[i];
        array[i] = array[mid];
        array[mid] = temp;
        mid++;
      }
    }

    let temp = array[mid];
    array[mid] = array[end];
    array[end] = temp;

    subSort(0, mid - 1);
    subSort(mid + 1, end);

  }

  subSort(0, array.length - 2);
  return array;
}

console.log( quickSort([4,15,16,50,8,23,42,108]));
