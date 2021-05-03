/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

//Array iniziale
let words = [
  "TastierA",
  "CELLULARE",
  "MICRoFONo",
  "CAlcoLATRICE",
  "mOUSe",
  123,
];
console.log("Parole prima del ciclo: ", words);

//map per creare un nuovo array con con le parole minuscole, con iniziale maiuscola.
let capWords = words.map((word) => {
  return formatText(word);
});

console.log("Parole dopo map: ", capWords);

//Funzioni

function formatText(text) {
  if (typeof text === "string") {
    let str = text[0].toUpperCase(); //il primo carattere sarà sempre maiuscolo
    for (let i = 1; i < text.length; i++) {
      str += text[i].toLowerCase(); //concatenazione degli altri caratteri della parola, in minuscolo
    }
    return str;
  } else {
    alert("ATTENZIONE: Parola non valida");
  }
}

console.log("Funzione formatta testo: ", formatText(words[0]));
