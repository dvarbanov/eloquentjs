var chess = ""
var size = 8

for (var row = 1; row <= size; row++) {
  for (var col = 1; col <= size; col++) {
    if ((row + col) % 2 == 0)
      chess += "#"
    else
      chess += " "
  }
  chess += "\n"
}

console.log(chess)
