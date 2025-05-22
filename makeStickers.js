function makeStickers(detailsCount, robotPart) {
  const result = [];

  for (let i = 1; i <= detailsCount; i++) {
    result.push(`${robotPart} detail #${i}`);
  }
  return result;
}


console.log(makeStickers(3, 'Body'));