var box = {
  locked: true,
  unlock: function() { this.locked = false },
  lock: function() { this.locked = true },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!")
    return this._content
  }
}

function withBoxUnlocked(body) {
  if (!box.locked) return body()

  box.unlock()
  try {
    return body()
  } finally {
    box.lock()
  }
}

withBoxUnlocked(function() {
  box.content.push("I'm in!")
})
console.log(box.content)

try {
  withBoxUnlocked(function() {
    throw new Error("Madafaka Abort!")
  })
} catch (error) {
  console.log("Error raised:", error)
}

console.log(box.locked)
