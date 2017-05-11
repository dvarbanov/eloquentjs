function reverseArray (array) {
  revArray = []
  for (var index = array.length-1; index >= 0; index--) {
    revArray.push(array[index])
  }
  return revArray
}

function reverseArrayInPlace (array) {
   var middle = Math.floor(array.length / 2)
   for (var index = 0; index < middle; index++) {
     var slot = array[index];
     array[index] = array[array.length - 1 - index];
   	 array[array.length - 1 - index] = slot;
   }
   return array
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f']))

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
