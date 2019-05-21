// Create a list that holds all of your cards
var list = [].slice.call(document.querySelectorAll(".card"));
// store the open cards
var storeCards = [];

// Adding an event listener to each card.
list.forEach(i => {
  i.addEventListener('click', openCards);
});

var timeStatus = true;

//  Display the cards on the page
function openCards() {
  if (timeStatus == true) {
    timeStatus = false;
    timerCreation();
  }
  // chechk the condition
  if (!this.classList.contains('open') && storeCards.length < 2) {
    this.classList.add('open', 'show', 'close');
    storeCards.push(this);
    cardsMatched();
  }
}

//  shuffle the list of cards using the provided "shuffle" method
var deck = document.querySelector(".deck");
shuffle(list).forEach(() => {
  [].filter.call(list, function(items) {
    deck.appendChild(items);
  });
});

// Matching the cards
function cardsMatched() {
  moveCounter();
  setTimeout(function() {
    if (storeCards.length === 2) {
      if (storeCards[0].id === storeCards[1].id) {
        storeCards.forEach(i => {
          i.classList.add('match', 'close');
          i.classList.remove('open', 'show');
          storeCards = [];
        });
        gameOver();
      } else {
        storeCards.forEach(i => {
          i.classList.remove('open', 'show', 'close', 'match');
        });
      }
      storeCards = [];
    }
  }, 500);
}

// moves
var move = document.querySelector('.moves');

function moveCounter() {
  moves = move.innerHTML;
  moves++;
  move.innerHTML = moves;
  starRating();
}

// timer Creation
var timer = document.querySelector('#time');
var sec = 0,
  mins = 0,
  hours = 0;

function timerCreation() {
  timerInterval = setInterval(function() {
    sec++;
    if (sec == 60) {
      mins++;
      sec = 0;
    }
    if (mins == 60) {
      mins = 0;
      hours++;
    }
    timer.innerHTML = hours + " : " + mins + " : " + sec;
  }, 1000);
}

// Stars Rating
var stars = [...document.querySelectorAll('.fa-star')];

function starRating() {
  if (moves == 18) {
    stars[2].classList.add('fa-star-o');
    stars[2].classList.remove('fa-star');
  } else if (moves == 35) {
    stars[1].classList.add('fa-star-o');
    stars[1].classList.remove('fa-star');
  }
}

// Game Over
var matchCount = 0;

function gameOver() {
  matchCount++;
  var starsLength = document.querySelectorAll('.fa-star').length;
  var starsCount = "";
  while (starsLength-- > 0) {
    starsCount += '<i class="fa fa-star">';
  }

  if (matchCount == 8) {
    clearInterval(timerInterval);
    //sweet alert
    swal({
      title: 'Congratulations..!',
      html: "Total Moves : <b>" + move.innerHTML + "</b><br>  Wow! you have completed the game within short time : <b>" + timer.innerHTML + " sec </b><br> You have earned : " + starsCount,
      confirmButtonText: 'Do you want to play again.!'
    }).then(function() {
      restart();
    });
  }
}

// reload
function restart() {
  window.location.reload();
}
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
