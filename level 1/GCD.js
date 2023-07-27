// function max(num1, num2) {
//   if (num1 > num2) return num1;
//   return num2;
// }

// Greatest common divisor -> GCD aka Highest common factor -> HCF

function gcd(num1, num2) {
  let maxm = Math.max(num1, num2);
  let minm = Math.min(num1, num2);

  while (maxm % minm !== 0) {
    let temp = minm;
    minm = maxm % minm;
    maxm = temp;
  }
  return minm;
}

console.log(gcd(144, 128));
