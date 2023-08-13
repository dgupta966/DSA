/*

1
01
101
0101
10101
010101
1010101

*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        document.write(1);
      } else {
        document.write(0);
      }
    }
    document.write("<br />");
  }
}
pattern(7);
