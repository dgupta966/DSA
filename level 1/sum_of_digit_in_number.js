// Sum of the digits of a given number -> 5+7+6 = 18

const num = 576;

function sum(num) {
  let s = 0;
  while (num != 0) {
    s += num % 10;
    num = Math.floor(num / 10);
  }
  return s;
}

console.log(sum(num));
