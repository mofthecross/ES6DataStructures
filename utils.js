/*
stringify is a function that allows you to see deeply nested objects.
stringify returns a string with given indentation/spaces for each line.

INPUT:
  const newBT = new BinaryTreeNode(5);
  newBT.leftChild = new BinaryTreeNode(2);
  newBT.rightChild = new BinaryTreeNode(7);
  newBT.rightChild.leftChild = new BinaryTreeNode(4);
  newBT.rightChild.rightChild = new BinaryTreeNode(9);

  stringify(newBT, 9);

OUTPUT:
  {
           "value": 5,
           "leftChild": {
                    "value": 2,
                    "leftChild": null,
                    "rightChild": null
           },
           "rightChild": {
                    "value": 7,
                    "leftChild": {
                             "value": 4,
                             "leftChild": null,
                             "rightChild": null
                    },
                    "rightChild": {
                             "value": 9,
                             "leftChild": null,
                             "rightChild": null
                    }
           }
  }

*/

const stringify = (obj, space) => {
 const seen =[];

  return JSON.stringify(obj, function(key, val) {
     if (val != null && typeof val == "object") {
          if (seen.indexOf(val) >= 0) {
              return;
          }
          seen.push(val);
      }
      return val;
  }, space);
}

module.exports.stringify = stringify
