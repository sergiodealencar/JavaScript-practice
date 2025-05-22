function doublePower(currentPowers) {
  const result = [];

  for (const n of currentPowers) {
    result.push(n * 2);
  }
  return result;
}

console.log(doublePower([42, 53, 28]));

