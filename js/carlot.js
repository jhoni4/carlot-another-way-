"use strict";
var CarLot = require('./carLot'),
     usedLot = [];

var loadInventory = function (populatePage) {
  return new Promise( function (resolve,reject){
  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.open('GET', 'inventory.json');
  inventoryLoader.send();

  inventoryLoader.addEventListener('load', function onLoad() {
    usedLot = JSON.parse(inventoryLoader.responseText).cars;
    console.info('Success: Loaded inventory.json.');
    populatePage(usedLot);
    resolve(usedLot);//No longer responsible for loadInventory

  });
});
};
var getInventory = function() {
    return usedLot;
};

module.exports = { loadInventory, getInventory };
