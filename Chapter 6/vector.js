function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y)
}

Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y)
}

// Vector.prototype.length = function() {
//   return Math.sqrt(this.x * this.x + this.y * this.y)
// }

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x * this.x + this.y * this.y) }
})


vectorche1 = new Vector(1, 2)
vectorche2 = new Vector(3, 4)

console.log(vectorche1.plus(vectorche2))
console.log(vectorche1.minus(vectorche2))
console.log(vectorche1.length
