/*


       * 
      * * 
     * * * 
    * * * * 
   * * * * * 
  * * * * * * 
 * * * * * * * 
* * * * * * * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
       * * * * * 
      * * * * * * 
     * * * * * * * 
    * * * * * * * * 
   * * * * * * * * * 
  * * * * * * * * * * 
 * * * * * * * * * * * 
* * * * * * * * * * * * 
       * * * * * * * 
      * * * * * * * * 
     * * * * * * * * * 
    * * * * * * * * * * 
   * * * * * * * * * * * 
  * * * * * * * * * * * * 
 * * * * * * * * * * * * * 
* * * * * * * * * * * * * * 
          * * * 
          * * * 
          * * * 
          * * * 
          * * * 
          * * * 
          * * * 
          * * * 


*/

for (let m = 1; m <= 7; m += 2) {
  pattern(m);
  if (m === 7) {
    for (let i = 1; i <= m + 1; i++) {
      for (let j = 1; j <= 10; j++) {
        document.write("&nbsp");
      }
      for (let k = 1; k <= 3; k++) {
        document.write("*" + "&nbsp");
      }
      document.write("<br />");
    }
  }
}

function pattern(m) {
  for (let i = m; i <= 7 + m; i++) {
    for (let j = i; j <= 6 + m; j++) {
      document.write("&nbsp");
    }
    for (let k = 1; k <= i; k++) {
      document.write("*" + "&nbsp");
    }
    document.write("<br />");
  }
}
