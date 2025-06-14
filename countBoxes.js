function countBoxes(boxes) {
  const boxesCount = {};

  for (const box of boxes) {
    if (!boxesCount[box]) {
      boxesCount[box] = 0;
    }

    boxesCount[box]++;
  }

  return boxesCount;
};
