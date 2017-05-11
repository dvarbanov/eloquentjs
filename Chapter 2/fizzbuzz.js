for (var num = 1; num <= 100; num += 1) {
  if (num % 3 == 0)
    if (num % 5 == 0)
      console.log('FizzBuzz')
    else
      console.log('Fizz')
  else if (num % 5 == 0)
    console.log('Buzz')
  else
    console.log(num)
}
