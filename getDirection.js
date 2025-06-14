function getDirection(direction) {
  switch (direction) {
    case 'forward':
      return 'hor=0 ver=1';
      break;
    case 'back':
      return 'hor=0 ver=-1';
      break;
    case 'right':
      return 'hor=1 ver=0';
      break;
    case 'left':
      return 'hor=-1 ver=0';
      break;
    case 'stop':
      return 'hor=0 ver=0';
      break;
    default:
      return 'hor=0 ver=0';
  }
}