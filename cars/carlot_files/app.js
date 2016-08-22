(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./carLot":1}],2:[function(require,module,exports){
"use strict";

var cardStyle = require('./style');

var activateEvents = function() {
  var select = document.querySelectorAll(".carCard");
  select.forEach(function(cardSelect){
    cardSelect.addEventListener("click", function(){
      var userInput = document.querySelector("#userInput");
      userInput.value = "";
      userInput.focus();
      cardStyle.restoreState(select);
      cardStyle.changeState(cardSelect, "clickedCarCard");
      cardStyle.textEdit(cardSelect, userInput);
    });
  });
};

module.exports = activateEvents;

},{"./style":4}],3:[function(require,module,exports){
"use strict";

var carInventory = require('./carLot'),
    eventStuff = require('./event');
  // Loop over the inventory and populate the page
  function populatePage(inventory) {
    var showRoom = document.querySelector('#showRoom');
    var outputString = "";
    // console.log(inventory)
    for (var i = 0; i < inventory.length; i++) {
      console.log(inventory[i].make);
      var car = inventory[i];
      if (i % 3 === 0) {
        outputString += `<div class="row">`;
      }

    outputString += `<div class="col-md-4 carCard" style="border-color: ${car.color}">
      <img src="${car.url}">
      <h3>${car.year} ${car.make} ${car.model}</h3>
      <h3>$${car.price}</h3>
      <h3>${car.color}</h3>
      <h3>${car.purchased}</h3>
      <p>${car.description}</p>
      </div>`;
    }
    if ((i + 1) % 3 === 0) {
      outputString += `</div>`;
      }
      showRoom.innerHTML = outputString;
    }
     eventStuff();

  carInventory.loadInventory(populatePage)
  .then(
      function(inventoryFromLoadInventoryResonlve){
        console.log("carPromise", inventoryFromLoadInventoryResonlve);
      },
    function (reason) {
      console.error('something went wrong', reason);
    })
  .then(function(){
      eventStuff();
    });


},{"./carLot":1,"./event":2}],4:[function(require,module,exports){
"use strict";
var userInput = document.getElementById('userInput'),
 cardStyle = {};

cardStyle.restoreState = function(select){
    select.forEach(function(cardSelect){
      cardSelect.classList.remove("clickedCarCard");
    });
  };
cardStyle.changeState = function(cardSelect, clickedCarCard){
    cardSelect.classList.add(clickedCarCard);
  };
cardStyle.textEdit = function(cardSelect, userInput){
     userInput.value = cardSelect.querySelector("p").innerHTML;
     userInput.addEventListener("keyup", function(){
       if (cardSelect.classList.contains("clickedCarCard")){
         cardSelect.querySelector("p").innerHTML = userInput.value;
        }
      });
};
module.exports = cardStyle;

},{}]},{},[3]);
