const arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 10, 12, 45, 46, 46, 46];

function firstOccurrence(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      if (mid === 0) {
        return mid;
      } else if (arr[mid - 1] !== k) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(firstOccurrence(arr, 5));

function lastOccurrence(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < k) {
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      if (mid === arr.length - 1) {
        return mid;
      } else if (arr[mid + 1] !== k) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

console.log(lastOccurrence(arr, 5));

/*
    frequency of an element if we have sorted array - 

    lastOccurrence - firstOccurrence + 1
    
    it will be in just O(log2N) - log base 2 N time

*/

console.log(lastOccurrence(arr, 5) - firstOccurrence(arr, 5) + 1);

/*
time complexity - O(log2N) - log base 2 N
space - O(1)

*/
