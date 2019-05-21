# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## How to clone the project?

-   I downloaded the project from udacity blog. click <https://github.com/udacity/fend-project-memory-game.git> to clone the project.

## How to run the project?

-   Open the `index.html` on your favorite browser to run the project(game).Now you are all set to play the game

## Playing instructions

-   By clicking on the card you can able to see the cards
-   Click the cards in such a way that all the cards match to their corresponding ones

# Aim of the Project

-   The Aim of the project is to design a interactive Memory game. In this game we are matching the cards. If all cards are matched then you win the game get rating according to your moves

## What I have done to complete the project

-   I have thoroughly read and understood the functionality of the code in the `index.html`, `app.css` and `app.js` files given by the udacity.

-   Then I have done following changes in `indx.html` and `app.js` files to design the game

## changes made in index.html file

-   I have first removed the class names `open` ,`show` and `match` for the cards which have came along with the code from udacity

-   created a `<div>` container  with id `"time"` to show the countdown timer

-   Included the below script tag in the `<head>` to get the sweet alert


    <script src="https://unpkg.com/sweetalert2@7.8.2/dist/sweetalert2.all.js"></script>

## changes made in app.js file

-   I have created an array of cards and made use of `shuffle()` provided by the udacity to shuffle the cards and append on to the deck. which shuffles the cards on every reload

-   I have added Event listener for all cards and `displaycards()`function to open the cards and show content when clicked

-   Another function `cardsMatched()` is used to check whether the cards are matched or not, if not matched it closes the card else it changes the cards class to match

-   I have created an array of stars which hold stars and a `mov()` function to decrement the stars on increase in the number of moves

-   The `totalcount` variable is used to check whether all card pairs are matched or not.
    if all cards are matched it display a sweet alert saying you have won the game

-   I have added functionality to repeat button by adding the event listener to it. when clicked it reloads the page

-   I have added a `timer()` function  to create a timer which counts the time taken by you to complete the game

-   I have added `reset()` function which will reset the game on clicking reset button

## conclusion

-   I learnt DOM manipulations with ES6 functionalities
-   I learnt the functionalities of JavaScript
-   I learnt how to deal with classlist properties
