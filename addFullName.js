const user = {
  firstName: 'Ivan',
  lastName: 'Vasylchenko',
}

function addFullName(usuario) {
  usuario.fullName = usuario.firstName + ' ' + usuario.lastName;
}

addFullName(user);
