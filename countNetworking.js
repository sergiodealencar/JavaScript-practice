function countNetworking(quarantineLength, frequency) {
  let result;

  result = Math.ceil((12 - quarantineLength) / frequency);

  return result;
}