
function replaceSpaces(input) {
    let result = '';
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            result = result + '-';
        } else {
            result = result + input[i];
        }
    }
  
    console.log(result);
  }
  
  replaceSpaces('one two three');