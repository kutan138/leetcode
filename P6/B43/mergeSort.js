const mergeSort = (arr, l, r) => {
  if (l >= r) {
    return [arr[l]];
  }

  const iMid = Math.floor((l + r) / 2);
  const arrLeft = mergeSort(arr, l, iMid);
  const arrRight = mergeSort(arr, iMid + 1, r);

  const result = [];
  let iLeft = 0;
  let iRight = 0;

  while (iLeft < arrLeft.length && iRight < arrRight.length) {
    if (arrLeft[iLeft] <= arrRight[iRight]) {
      result.push(arrLeft[iLeft]);
      iLeft++;
    } else {
      result.push(arrRight[iRight]);
      iRight++;
    }
  }

  while (iLeft < arrLeft.length) {
    result.push(arrLeft[iLeft]);
    iLeft++;
  }

  while (iRight < arrRight.length) {
    result.push(arrRight[iRight]);
    iRight++;
  }

  return result;
};

const array = [2, 5, 7, 8, 2, 5, 6];
console.log(mergeSort(array, 0, array.length - 1));
