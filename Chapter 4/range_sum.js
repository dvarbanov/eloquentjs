function range(start, end, step){
  var array = []
  if (start < end){
    if (step == undefined){step = 1}
    for (var br = start; br <= end; br = br + step){
      array.push(br)
    }
  }
  else {
    if (step == undefined){step = -1}
    for (var br = start; br >= end; br = br + step){
      array.push(br)
    }
  }
  return array
}

function sum(arr){
  var result = 0
  for (var index = 0; index < arr.length; index++){
     result += arr[index]
  }
  return result
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(10, 1));
console.log(range(10, 1, -2));
console.log(sum(range(1, 10)));
