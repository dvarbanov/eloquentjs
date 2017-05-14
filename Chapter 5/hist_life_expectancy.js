var ancestry = require("./ancestry")

function plus(x, y) { return x + y }
function average(array) {
  return array.reduce(plus) / array.length
}

function specifyCentury(data) {
  var centuries = {}
  data.forEach(function(person) {
    var age = person.died - person.born
    century = [Math.ceil(person.died / 100)]
    if (centuries[century] == null)
      centuries[century] = [age]
    else
      centuries[century].push(age)
  })
  return centuries
}

function averageAge(data){
  centuries = specifyCentury(data)
  for (var century in centuries)
    centuries[century] = average(centuries[century])
  return centuries
}

console.log(averageAge(ancestry))
