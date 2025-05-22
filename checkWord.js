function checkWord(words, word) {
  if (words.includes(word)){
    return true;
  } else {
    return false;
  }
}

console.log(checkWord(['cruzeiro', 'arsenal', 'bahia'], 'cruzeiro'));