/* 
pattern problem
   1
  121
 12321
1234321
-------
*/

function pattern(n) {
  let m = n - 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < m; j++) {
      document.write("&nbsp");
    }
    for (let k = 1; k <= i; k++) {
      document.write(k);
    }
    for (let l = i - 1; l >= 1; l--) {
      document.write(l);
    }

    document.write("<br />");
    m--;
  }
}

pattern(9);
