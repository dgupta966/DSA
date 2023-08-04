// https://leetcode.com/problems/unique-paths/

let m = 3;
let n = 9;
function coutpart(i, j) {
  if (i === m - 1 || j === n - 1) {
    return 1;
  }
  return coutpart(i, j + 1) + coutpart(i + 1, j);
}

console.log(coutpart(0, 0));

// need to improve time complexity
