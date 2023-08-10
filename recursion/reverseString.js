let str = "deepak";

function swap(str, i, j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}

function reverseString(str, i, j) {
  if (i > j) {
    return;
  }

  swap(str, i, j);
  i++;
  j--;
  reverseString(str, i, j);
  return str.join("");
}

const rev = reverseString(str.split(""), 0, str.length - 1);
console.log(rev);
