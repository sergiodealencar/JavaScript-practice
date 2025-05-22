function isSorted(boxNumbers) {
  for (let i = 1; i < boxNumbers.length; i++) {
    if (!(boxNumbers[i] >= boxNumbers[i - 1] )) {
    return false;
    }
  }
  return true;
}


console.log(isSorted([1, 3, 3, 4, 5]));