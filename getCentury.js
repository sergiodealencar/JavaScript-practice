
function getCentury(year) {
  let century;

  if (year === 0) {
    century = 1;
  } else {
    century = Math.ceil(year / 100);
  }
  return century;
}
