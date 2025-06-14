function restoreNames(users) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName === undefined || users[i].firstName === null) {
      users[i].firstName = users[i].fullName.split(' ')[0];
    }
  }
  return users;
}