// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = function (l1, l2) {
  let n = l1.length;
  let m = l2.length;

  let o = Math.max(n, m);
  let carry = 0;
  const temp = [];
  for (let i = 0; i < o; i++) {
    let s = 0;
    if (i < n && i < m) {
      s = l1[i] + l2[i] + carry;
    } else if (i < n) {
      s = l1[i] + carry;
    } else {
      s = l2[i] + carry;
    }

    if (s / 10 >= 1) {
      temp.push(s % 10);
      carry = Math.floor(s / 10);
    } else {
      temp.push(s);
      carry = 0;
    }
  }
  if (carry > 0) {
    temp.push(carry);
  }
  return temp;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])); // output - [8, 9, 9, 9, 0, 0, 0, 1]

// above solution in array
// need to implement in linked list
