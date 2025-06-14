removeFemaleAges.jsconst people = [
  { name: 'Emma', gender: 'female', age: 19 },
  { name: 'Avram', gender: 'male', age: 41 },
];

function removeFemaleAges(people) {
  for (const person of people) {
    if (person.gender === 'female') {
      delete person.age;
    }
  }
}
