const arr = [1, 2, 3, 1];
const arr2 = [1, 2, 1, 3, 5, 6, 4];

// https://leetcode.com/problems/find-peak-element/

function peakElement(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid === 0 && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (mid === arr.length - 1 && arr[mid] > arr[mid - 1]) {
      return mid;
    }

    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(peakElement(arr2));

// need some more tests
