const arr = [5, 6, 7, 8, 1, 2, 3, 4];

function pivot(arr, n) {
  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= arr[n - 1]) {
      high = mid - 1;
    } else {
      if (arr[mid] > arr[mid + 1]) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

function binarySearch(arr, key, lowIndex, highIndex) {
  let low = lowIndex;
  let high = highIndex;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

function searchKey(arr, key) {
  const n = arr.length - 1;
  const pivotValue = pivot(arr, n); // time - O(logN)

  if (pivotValue === -1) {
    return binarySearch(arr, key, 0, n); // corner case - when array have one section (simple sorted)
  }

  if (arr[n] > key) {
    // part 1
    return binarySearch(arr, key, pivotValue + 1, n);
  } else {
    // part 2
    return binarySearch(arr, key, 0, pivotValue);
  }
}

console.log(searchKey(arr, 7));
/*
[5, 6, 7, 1, 2, 3, 4]
find pivot - [5, 6, < 7 >, 1, 2, 3, 4] - pivot is value that is always with its previous 
  and next value is smaller. e.g., [6 < 7 > 1]

pivot is '7' then 
[5,6,7]  [1,2,3,4]
part 1    part 2 

part 1 -> 0 to pivot
part 2 -> pivot+1 to n

for part 2 -> check last index value if it is smaller than key 
for part 1 -> check last index value if it is larger than key

now perform binary search operation ...

time complexity apprx - O(logN)

*/
