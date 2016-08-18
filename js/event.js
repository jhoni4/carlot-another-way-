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
