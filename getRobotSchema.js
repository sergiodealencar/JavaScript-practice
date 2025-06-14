function getRobotSchema(robot) {
  const schema = {};

  for (const key in robot) {
    schema[key] = typeof robot[key];
  }

  return schema;
}
