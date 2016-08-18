"use strict";

CarLot = (function(carLot){
  carLot.restoreState = function(select){
    select.forEach(function(cardSelect){
      cardSelect.classList.remove("clickedCarCard")
    })
  }
  carLot.changeState = function(cardSelect, clickedCarCard){
    cardSelect.classList.add(clickedCarCard);
  }
  carLot.textEdit = function(cardSelect, userInput){
    userInput.addEventListener("keyup", function(){
      if (cardSelect.classList.contains("clickedCarCard")){
        cardSelect.querySelector("p").innerHTML = userInput.value
      }
    })
  }
  return carLot
})(CarLot);
