const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function prefixSum(arr) {
  const temp = [];
  temp.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    temp.push(arr[i] + temp[i - 1]);
  }
  return temp;
}

console.log(prefixSum(arr)); // output - [1, 3, 6, 10, 15, 21, 28, 36, 45]

const arr1 = [1, 2, -1, 3, 4, 0, 5, 2, 6, 7];

function prefixMax(arr) {
  if (arr.length <= 0) {
    return;
  }
  const temp = [];
  temp.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > temp[i - 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(temp[i - 1]);
    }
  }
  return temp;
}

console.log(prefixMax(arr1)); // [1, 2, 2, 3, 4, 4, 5, 5, 6, 7]
