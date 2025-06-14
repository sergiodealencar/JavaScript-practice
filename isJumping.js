function isJumping(number) {
  let str = number.toString();

  for (let i = 0; i < str.length - 1; i++) {
    let atual = Number(str[i]);
    let proximo = Number(str[i + 1]);

    if (!(Math.abs(atual - proximo) === 1)) {
      return 'NOT JUMPING';
    }
  }

  return 'JUMPING';
}
