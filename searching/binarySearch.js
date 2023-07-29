const arr = [2, 6, 7, 9, 11, 12, 19, 25, 36, 44, 65, 80];

function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === k) {
      return mid;
    } else if (arr[mid] < k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 44));

/*
time complexity - O(N)
space - O(1)

*/
