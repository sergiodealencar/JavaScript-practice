const robôs = [
  {coreVersion: 9},
  {coreVersion: 13},
  {coreVersion: 16},
  {coreVersion: 9},
  {coreVersion: 14},
];

function getOutdated(robots, newVersion) {
  const indexes = [];

  for (let i = 0; i < robots.length; i++) {
    if (robots[i].coreVersion < newVersion) {
      indexes.push(i);
    }
  }

  return indexes;
}