// find sum of any pair in array

const arr = [4, 3, 2, 7, 1, 7];

function checkPair(arr, k) {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (m.get(arr[i])) {
      let value = m.get(arr[i]);
      m.set(arr[i], ++value);
    } else {
      m.set(arr[i], 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let searchedElement = k - arr[i];
    if (m.get(searchedElement)) {
      let freq = m.get(searchedElement);
      if (arr[i] === searchedElement && freq > 1) {
        return "True";
      } else if (arr[i] != searchedElement) {
        return "True";
      }
    }
  }

  return "False";
}

console.log(checkPair(arr, 7));

// approach 2
function checkPair2(arr, k) {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (m.has(k - arr[i])) {
      return "True";
    }
    m.set(arr[i], 0);
  }
  console.log(m);
  return "False";
}

console.log(checkPair2(arr, 9));

/* Time complexity - logn
   Space complexity - logn

*/
