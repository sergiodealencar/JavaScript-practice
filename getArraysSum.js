function getArraysSum(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return 'os dois arrays não têm o mesmo tamanho';
  }
  let sum = 0;
  const arrFinal = arr1.concat(arr2);

  for (const n of arrFinal) {
    sum += n;
  }

  return sum;
}

console.log(getArraysSum([1], []));