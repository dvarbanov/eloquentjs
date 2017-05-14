function some(array, criteria) {
  for (var br = 0; br < array.length; br++) {
    if (criteria(array[br]))
      return true
  }
  return false
}

function every(array, criteria) {
  for (var br = 0; br < array.length; br++)  {
    if (criteria(array[br]) === false)
      return false
  }
  return true
}


console.log(some([3, 4, NaN], isNaN));
console.log(some([3, 4, 5], isNaN));

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
