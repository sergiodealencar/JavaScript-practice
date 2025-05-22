function createArray(N) {
  const result = [];
  for (let i = 1; i <= N; i++) {
    result.push(i);
  }
  return result;
}

console.log(createArray(42));