// rotate array closewise - k times

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function rotateArray(arr, k) {
  const temp = [];
  const n = arr.length;
  const m = (k % n) - 1;

  for (let i = n - m - 1; i < n; i++) {
    temp.push(arr[i]);
  }
  for (let j = 0; j < n - m - 1; j++) {
    temp.push(arr[j]);
  }

  return temp;
}

console.log(rotateArray(arr, 3));
