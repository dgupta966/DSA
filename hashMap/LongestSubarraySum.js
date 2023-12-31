const arr = [2, 1, 4, -3, -2, 3, -1, -2, 6];

function longestSubarraySum(arr, k) {
  const m = new Map();
  let ans = 0;
  let pSum = 0;
  m.set(pSum, -1);
  for (let i = 0; i < arr.length; i++) {
    pSum += arr[i];
    if (!m.has(pSum - k)) {
      m.set(pSum, i);
    } else {
      ans = Math.max(ans, i - m.get(pSum - k));
    }
  }
  //   console.log(m);
  //   console.log(ans);

  return ans;
}

console.log(longestSubarraySum(arr, 15));
