const yourArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrCutted = getCuttedArray(yourArr);
console.log("Array tagliato: " + arrCutted);

//funzione che restituisce una porzione del nostro array principale
function getCuttedArray(arr) {
  let b = getRandomArbitrary(1, arr.length); //Estremo superiore
  console.log("Estremo superiore: " + b);
  let a = getRandomArbitrary(0, b); //Estremo inferiore
  console.log("Estremo inferiore: " + a);
  return arr.slice(a, b);
}

//genero un numero random
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
