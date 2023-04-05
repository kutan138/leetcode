const binarySearch = (arr, value) => {
  const n = arr.length;
  let iLeft = 0;
  let iRight = n - 1;
  while (iLeft <= iRight) {
    const iMid = Math.round((iLeft + iRight) / 2);
    if (arr[iMid] === value) {
      return iMid;
    } else if (arr[iMid] < value) {
      iLeft = iMid + 1;
    } else {
      iRight = iMid - 1;
    }
  }
  return -1;
};

const a = [1, 2, 4, 5, 6, 7, 9, 10, 11];
