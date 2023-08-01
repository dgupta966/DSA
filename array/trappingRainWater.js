function prefixMax(height, n) {
  const temp = [];
  temp.push(height[0]);
  for (let i = 1; i < n; i++) {
    temp[i] = Math.max(temp[i - 1], height[i]);
  }
  return temp;
}

function suffixMax(height, n) {
  const temp = new Array(n - 1);
  temp[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    temp[i] = Math.max(temp[i + 1], height[i]);
  }
  return temp;
}

var trap = function (height) {
  const n = height.length;
  const left = prefixMax(height, n);
  const right = suffixMax(height, n);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.min(left[i], right[i]) - height[i];
  }
  return sum;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
