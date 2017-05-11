function countBs(string){
  return countChar(string, 'B')
}

function countChar(string, char){
  var counter = 0;
  for (var br = 0; br < string.length; br++){
    if (string.charAt(br) == char)
      counter += 1;
  }
  return counter;
}

console.log(countChar('asqedw', 'd'))
