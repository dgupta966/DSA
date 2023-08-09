const arr = [40, 10, 10, 30, 40, 20, 50, 70, 50];

function kthSmallest(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let smaller = 0;
    let equal = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        smaller++;
      } else if (arr[j] === arr[i]) {
        equal++;
      }
    }
    let total = smaller + equal;
    if (total >= k && smaller < k) {
      return arr[i];
    }
  }
}

console.log(kthSmallest(arr, 6));
// Time complexity - O(n^2) needs improvement

// most naive approach is that we could sort the array and return arr[k-1] element
// but here we tempered the actual array, we need to solve without tempering
// the actual and also doesn't create extra space
