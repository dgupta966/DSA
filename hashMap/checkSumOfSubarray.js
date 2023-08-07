// check sum of sub-array is equal to k using hashMap and precomputation - prefixSum

const arr = [1, 2, 3, -1, 0, 5, 4];

function checkSumEqualToK(arr, k) {
  const m = new Map();
  let pSum = 0;
  m.set(pSum, -1);

  for (let i = 0; i < arr.length; i++) {
    pSum += arr[i];

    if (m.get(pSum - k)) {
      return "True";
    }
    m.set(pSum, i);
  }
  console.log(m);
  return "False";
}

console.log(checkSumEqualToK(arr, 7));
