var month = function() {
  var monthNames = ['January', 'February', 'March', 'April',
               'May', 'June', 'July', 'August',
               'September', 'October', 'November', 'December']
  return {
    name: function(number) { return monthNames[number-1] },
    number: function(name) { return monthNames.indexOf(name)+1 }
  }
}()

// console.log(month)
console.log(month.name(3));
console.log(month.number('January'));
