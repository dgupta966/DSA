function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// console.log(isPrime(2));

function printPrimeToN(n) {
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimeToN(20);
