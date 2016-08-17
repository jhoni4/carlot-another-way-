# carlot-another-way-
Single Page Applications Quiz

Setup

Create the working directory for the quiz first.

mkdir -p ~/workspace/quizzes/spa && cd $_
Clone this repository and cd into the directory it creates.

Now run the following commands.

git checkout -b quiz
touch index.html
touch quiz.js
touch quiz.css
touch inventory.json
You are now ready to work in the quiz branch.

When your work in complete, push up the branch (git push origin quiz) and submit the pull request on Github.

Instructions

You operate a used car lot, and need to have an application where you can update the description and availability of each car in your inventory. You are going to using the Bootstrap grid to lay out your HTML structure.

Behavior

Create an array of cars in the inventory.json file (see example structure below). Put at least three cars in the array.
When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of container.
Put a standard Bootstrap navbar element at the top of your page.
Put only two elements in the navbar.
A text input field.
A button.
Make sure you display all properties of the car in the DOM. Basic styling is up to you.
Put a border around the car information that matches the color of the car. To make this easier, set the color property value to an existing named CSS color.
When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.
Technical Requirements

Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. getInventory).
The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application. Name the function activateEvents.
The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
A car DOM element that was clicked on.
A color name.
