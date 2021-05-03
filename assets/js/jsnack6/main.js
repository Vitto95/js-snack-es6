/* 
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

//Array di oggetti(persone)
let people = [
  {
    name: "Ugo",
    surname: "DeUghi",
    age: 76,
  },
  {
    name: "Marco",
    surname: "Bianchi",
    age: 16,
  },
  {
    name: "Franco",
    surname: "Rossi",
    age: 34,
  },
  {
    name: "Michela",
    surname: "Bianchi",
    age: 23,
  },
  {
    name: "Francesca",
    surname: "Neri",
    age: 37,
  },
  {
    name: "Alessia",
    surname: "Viola",
    age: 15,
  },
];

console.log("Array di persone: ", people);

let canDrive = people.map((person) => {
  if (person.age >= 18) {
    return `${person.name} ${person.surname} ha ${person.age} anni, quindi può guidare`;
  } else {
    return `${person.name} ${person.surname} ha ${person.age} anni, quindi non può guidare`;
  }
});

console.log("Array con indicazioni di guida: ", canDrive);
