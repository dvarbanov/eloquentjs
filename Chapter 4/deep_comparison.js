function deepEqual(x, y) {
  if (x === y) return true
  if (typeof x != "object" || typeof y != "object")
    return false;

  var xProperties = 0
  for (var property in x) {
    xProperties += 1
  }

  var yProperties = 0
  for (var property in y) {
    yProperties += 1;
    if (!(property in x) || !deepEqual(x[property], y[property]))
      return false;
  }
  return xProperties == yProperties;
}

var num1 = 1, num2 = 1;
var obj1 = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "an"}, object: 2};

console.log(deepEqual(num1, num2)); // → true
console.log(deepEqual(obj1, obj2)); // → true
console.log(deepEqual(obj1, {here: 1, object: 2})); // → false
console.log(deepEqual(obj1, {here: {is: "an"}, object: 2})); // → true
