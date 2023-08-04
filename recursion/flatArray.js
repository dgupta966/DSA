const arr = [1, 2, [3, 4], [5, 6, [7, 8, [9, 10], 11], 12, 13], 14];

function flatArray(arr) {
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      temp = temp.concat(flatArray(arr[i]));
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}

console.log(flatArray(arr));

//console.log(arr.flat(Infinity))
