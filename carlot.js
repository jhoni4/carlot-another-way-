var CarLot = (function () {
  usedLot = [];

  return {
    loadInventory: function (populatePage) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.addEventListener('load', function onLoad() {
        usedLot = JSON.parse(inventoryLoader.responseText).cars;
        console.info('Success: Loaded inventory.json.');
        populatePage(usedLot);
    });
    inventoryLoader.send();
  },
  getInventory: function() {
    return usedLot
  }
}

})(CarLot);
