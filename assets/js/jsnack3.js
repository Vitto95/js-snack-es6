//dichiarazione variabili

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ["a", "b", "c", "d", "e"];

while (arr1.length !== arr2.length) {
  if (arr1.length < arr2.length) {
    arr1.push(arr2[getRandomArbitrary(0, arr2.length)]);
  } else {
    arr2.push(arr1[getRandomArbitrary(0, arr1.length)]);
  }
}

console.log(arr1);
console.log(arr2);

//destrutturazione array

const [one, , , four, , , , eight, , ten] = arr1;
console.log(one, four, eight, ten);

//blocco funzioni
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
