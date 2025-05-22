function decryptMessage(message) {
  const result = [];

  for (let i = message.length - 1; i >= 0; i--) {
    result.push(message[i])
  }
  return result.join('');
}

console.log(decryptMessage('alice'));