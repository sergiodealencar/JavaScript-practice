/**
 * This comment gives you autocompletion
 * 
 * @param {string} word
 */
function checkWordLength(word) {
  if (word.length < 5){
    console.log(`${word} is a short word`);
  } else {
    console.log(`${word} is a long word`);
  }
}

checkWordLength('Hi');
checkWordLength('Hello');