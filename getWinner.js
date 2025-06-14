function getWinner(maxSolved, romanSolved) {
  if (+maxSolved > +romanSolved) {
    return 'Max is the winner!!!';
  } else if (+romanSolved > +maxSolved) {
    return 'Roman is the winner!!!'
  } else if (+maxSolved === +romanSolved) {
    return 'Roman and Maxim are the winners!!!';
  }
}
