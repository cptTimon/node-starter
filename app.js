const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Rychu', 'Kaziu', 'Kaczkin', 'Kapciak'];
const femaleNames = ['Dominika', 'Natalia', 'Zuza', 'Klaudia'];
const lastNames = ['Wojtysiak', 'Włodarczyk', 'Depp', 'Kowalczyk'];

const randChoice = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for (i=0; i<20; i++) {
  const person = {
    gender: randChoice(genders),
  };

  if (person.gender === 'M'){
    person.name = randChoice(maleNames);
  }
  else {
    person.name = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor((Math.random()*61 + 18));
  people.push(person);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});