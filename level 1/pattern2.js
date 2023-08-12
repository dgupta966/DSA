/*
    1
   2  2
  3    3
 4      4
5        5

*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = i; j < n; j++) {
      document.write("&nbsp");
    }
    for (let k = i; k <= i; k++) {
      document.write(k);
      for (var l = 1; l < 2 * i - 1; l++) {
        document.write("&nbsp");
      }
      if (l > 1) {
        document.write(k);
      }
    }
    document.write("<br />");
  }
}

pattern(5);
