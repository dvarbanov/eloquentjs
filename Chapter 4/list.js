
function arrayToList(array) {
  var list = null
  for (index = array.length-1; index >= 0; index--) {
    list = {value: array[index], rest: list}
  }
  return list
}

function listToArray(list) { // list = {value: 10, rest: {value: 20, rest: null}}
  var array = []
  for (split = list; split != null; split = split.rest)
    array.push(split.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
