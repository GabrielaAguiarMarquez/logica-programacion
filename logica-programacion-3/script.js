let fib;

fib = function(n) {
  if (n <= 1) return n;

  return fib(n-1) + fib(n-2);
};

const number = Number(prompt("Ingrese un número:"));

if (number !== null) {
  console.log(number);

  const fibonacciArray = [];

  for (let i = 0; i < number; i++) {
    fibonacciArray.push(fib(i));
  }

  console.log(fibonacciArray);
}
