let num = Math.ceil(Math.random() * 100);

let fizzbuzznum = (num % 35 == 0) ? 'FizzBuzz' : (num % 7 == 0) ? 'Buzz' : (num % 5 == 0) ? 'Fizz' : 'Number';

console.log(`${num}, ${fizzbuzznum}`)
