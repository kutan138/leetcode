const binarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const iMid = Math.round((left + right) / 2);
    if (arr[iMid] === value) {
      return iMid;
    }
    if (arr[iMid] > value) {
      right = iMid - 1;
    } else {
      left = iMid + 1;
    }
  }

  return -1;
};

const binarySearchRecursive = (arr, value, left, right) => {
  const iMid = Math.round((left + right) / 2);
  if (left > right) {
    return -1;
  }
  if (arr[iMid] === value) {
    return iMid;
  } else if (arr[iMid] > value) {
    return binarySearchRecursive(arr, value, left, iMid - 1);
  } else {
    return binarySearchRecursive(arr, value, iMid + 1, right);
  }
};

const a = [2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(binarySearchRecursive(a, 11, 0, a.length - 1));
