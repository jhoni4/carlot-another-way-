"use strict";

CarLot = (function(carLot) {
  carLot.activateEvents = function() {
    var select = document.querySelectorAll(".carCard");
    select.forEach(function(cardSelect){
      cardSelect.addEventListener("click", function(){
        var userInput = document.querySelector("#userInput");
        userInput.value = ""
        userInput.focus()
        CarLot.restoreState(select);
        CarLot.changeState(cardSelect, "clickedCarCard");
        CarLot.textEdit(cardSelect, userInput);
      })
    })
  }
  return carLot
})(CarLot);
