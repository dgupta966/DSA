let arr = [2, 4, 1, 5, 0, 6, 3];

function swap(arr, i, minimumIndex) {
  let temp = arr[i];
  arr[i] = arr[minimumIndex];
  arr[minimumIndex] = temp;
}

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let minimumIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }
    swap(arr, i, minimumIndex);
  }

  return arr;
}

console.log(selectionSort(arr));
