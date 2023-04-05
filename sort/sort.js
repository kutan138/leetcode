const a = [5, 2, 6, 8, 2, 3, 5, 8];

const swap = (arr, a, b) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
  return arr;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let isSorted = true;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        isSorted = false;
        swap(array, j, i);
      }
    }
    if (isSorted) {
      return array;
    }
  }
  return array;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const ai = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > ai) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = ai;
  }
  return array;
};

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        swap(array, j, minIndex);
        minIndex = j;
      }
    }
  }
  return array;
};

const thirdMaxArray = (maxArray, value) => {
  let i = 0;
  while (i < maxArray.length) {
    if (maxArray[i] === value) {
      return;
    } else if (maxArray[i] < value) {
      break;
    } else {
      i++;
    }
  }
  if (i < maxArray.length) {
    for (let j = maxArray.length - 2; j >= i; j--) {
      maxArray[j + 1] = maxArray[j];
    }
    maxArray[i] = value;
  }
  return maxArray;
};

const findThirdMax = (array) => {
  const maxArray = [Number.MIN_VALUE, Number.MIN_VALUE, Number.MIN_VALUE];
  array.forEach((element) => {
    thirdMaxArray(maxArray, element);
  });
  if (maxArray[2] === Number.MIN_VALUE) {
    return maxArray[0];
  }
  return maxArray[2];
};

console.log(
  "🚀 ~ file: sort.js:73 ~ findThirdMax ~ findThirdMax:",
  findThirdMax(a)
);
