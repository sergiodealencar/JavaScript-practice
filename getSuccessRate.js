function getSuccessRate(statistic) {
  const str = statistic;
  let sumOne = 0;
  let sumZero = 0;

  if (str === '') {
    return 0;
  }

  for (const char of str) {
    if (char === '0') {
      sumZero += 1;
    }

    if (char === '1') {
      sumOne += 1;
    }
  }
  return ((sumOne * 100) / str.length);
}