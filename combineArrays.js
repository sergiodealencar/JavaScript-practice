function combineArrays(first, second) {
  let result = [];
  if (first.length != second.length) {
    return 'os dois arrays não têm o mesmo tamanho';
  }
  for (let i = 0; i < first.length; i++) {
    result.push((first[i]) + (second[i]));
  }
  return result;
}

console.log(combineArrays([1, 2, 5], [3, 6, 1]));