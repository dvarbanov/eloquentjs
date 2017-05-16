// car and cat
console.log(/car|t/.test('cat'))

// pop and prop
console.log(/pr?op/.test('prop'))

// ferret, ferry, and ferrari
console.log(/ferr(et|y|ari)/.test('ferrari'))

// Any word ending in ious
console.log(/ious\b/.test('curious'))

// A whitespace character followed by a dot, comma, colon, or semicolon
console.log(/ (.|,|:|;)/.test('abc .'))

// A word longer than six letters
console.log(/\w{7}/.test('abc abcderff xy'))

// A word without the letter e
pattern = /\b[^e]+\b/
console.log(pattern.test('earth')) //--> false
console.log(pattern.test('bro')) //--> true
console.log(pattern.test('earth bro')) //--> true
console.log(pattern.test('earth earth')) //--> Why returns true?
