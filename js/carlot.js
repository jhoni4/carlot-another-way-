"use strict";
var CarLot = (function () {
  usedLot = [];

  return {
    loadInventory: function (populatePage) {
      return new Promise( function (resolve,reject){
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json');
    inventoryLoader.send();

      inventoryLoader.addEventListener('load', function onLoad() {
        usedLot = JSON.parse(inventoryLoader.responseText).cars;
        console.info('Success: Loaded inventory.json.');
        populatePage(usedLot);
     resolve(usedLot);//No longer responsible for loadInventory

      })
    });
  },
  getInventory: function() {
    return usedLot
  }
}

})(CarLot);
