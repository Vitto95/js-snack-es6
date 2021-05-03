/* 
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l’indice della tab aperta nell’array:
Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
*/

let browserWindow = {
  tabs: ["Facebook", "GitHub", "Gmail"],
  activeTab: 0,
};
console.log("Browser Window prima del ciclo: ", browserWindow);
const socialNetworks = ["Facebook", "Instagram", "Twitter", "TikTok"];

let deletedArr = [];
browserWindow.tabs.forEach((tab) => {
  if (socialNetworks.includes(tab)) {
    deletedArr.push(browserWindow.tabs.splice(browserWindow.activeTab, 1));
    browserWindow.activeTab++;
  }
});

console.log("Browser Window dopo ciclo: ", browserWindow);
console.log("array con finestre chiuse: ", deletedArr);
