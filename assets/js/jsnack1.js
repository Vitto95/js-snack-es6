var characters = "abcdefghijklmnopqrstuvwxyz".toUpperCase(); //alfabeto
var charactersLength = characters.length; //lunghezza alfabeto
console.log(charactersLength);
//squadra di basket
var basketballTeam = [
  {
    "Nome Giocatore": "giocatore1",
  },
  {
    "Nome Giocatore": "giocatore2",
  },
  {
    "Nome Giocatore": "giocatore3",
  },
  {
    "Nome Giocatore": "giocatore4",
  },
  {
    "Nome Giocatore": "giocatore5",
  },
];
var limit = 3; //limite per caratteri e numeri casuali

//funzione che genera codice giocatore casuale
function getRandomCode(chars, length) {
  var playerCode = "";
  while (playerCode.length < 3) {
    playerCode += chars.charAt(Math.floor(Math.random() * length - 1));
  }
  while (playerCode.length < 6) {
    playerCode += Math.floor(Math.random() * 10);
  }
  return playerCode;
}

for (var player of basketballTeam) {
  player.code = getRandomCode(characters, charactersLength);
  player.avgPt = Math.floor(Math.random() * 51);
  player.threePointsPerc = Math.floor(Math.random() * 101) + "%";
}

console.log(basketballTeam);
