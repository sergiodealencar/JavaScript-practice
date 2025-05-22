
function replaceA(input) {
  let result = '';
  for (let i = 0; i < input.length; i++){
    if (input[i] === 'A' || input[i] === 'a') {
      result = result + '*';
    } else {
      result = result + input[i];
    }
  }
  return result;
}

console.log(replaceA('ola, tudo bem'));