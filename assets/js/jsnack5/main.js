/* Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
   Crea un nuovo array con la lista dei mammiferi.
*/

let animals = [
  {
    name: "lupo",
    famiglia: "canidi",
    classe: "mammiferi",
  },
  {
    name: "orso",
    famiglia: "ursidi",
    classe: "mammiferi",
  },
  {
    name: "aquila",
    famiglia: "accipitridi",
    classe: "uccelli",
  },
];
console.log("Animali: ", animals);

let mammiferi = animals.filter((animal) => animal.classe === "mammiferi");
console.log("Mammiferi: ", mammiferi);
