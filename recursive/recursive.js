const giaiThua = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * giaiThua(n - 1);
};

const fiBo = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fiBo(n - 1) + fiBo(n - 2);
};

const F = {};
const fiBo2 = (n) => {
  if (F[n] !== undefined) {
    return F[n];
  }
  console.log("n", n);
  if (n <= 2) {
    F[n] = 1;
    return 1;
  }
  F[n] = fiBo2(n - 1) + fiBo2(n - 2);
  return F[n];
};

console.log("fibo", fiBo2(10));
