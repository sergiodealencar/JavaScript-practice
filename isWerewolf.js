function isWerewolf(target) {
  let word = target
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w]/g, '');

  let direct = '';
  let reversed = '';
  let letter;

  for (letter of word) {
    direct = (letter + direct);
    reversed = (reversed + letter);
  }

  if (direct === reversed) {
    return true;
  } else {
    return false;
  }

}
