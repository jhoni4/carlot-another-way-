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
