function printNumber(n) {
  if (n == 0) return;
  printNumber(n - 1);
  console.log(n);
}

printNumber(10);

/* 
10
9
8
7
6
5
4
3
2
1
*/

function printNumberNtoOne(n) {
  if (n == 0) return;
  console.log(n);
  printNumberNtoOne(n - 1);
}

printNumberNtoOne(10);
