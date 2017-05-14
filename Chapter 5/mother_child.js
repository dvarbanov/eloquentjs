var ancestry = require("./ancestry")

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person
})

function hasKnownMother(data) {
  return data.filter(function(person) {
    return byName[person.mother] != null
  })
}

var differences = hasKnownMother(ancestry).map(function(person) {
  return person.born - byName[person.mother].born;
})

function plus(x, y) { return x + y }
function average(array) {
  return array.reduce(plus) / array.length
}

console.log(average(differences))
