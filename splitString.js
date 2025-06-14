function splitString(str) {
  let core = [];
  let cut;

  if (!((str.length % 2) === 0)) {
    str = str + "_";
  }

  for (let i = 0; i < str.length ; i += 2) {
    cut = str[i] + str[i +1];
    core.push(cut);
  }
  return core;
}