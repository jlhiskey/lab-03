'use strict';

var userName, myAge, myState, myHobby, myCrash, mySiblings, myNumber, userGuess, usedGuesses, myStates, guessState, stateGuesses, userScore, finalTally;

userName = prompt('What is your name?');
userScore = 0;
alert('These questions are answered with a Y or N.');

myAge = prompt('Welcome ' + userName + '. Do you think that I am over 35?');
console.log('am I over 35?', userName);
if (myAge.toUpperCase() === 'Y') {
  alert('You are correct, I am 39.');
  userScore++;
} else if (myAge.toUpperCase() === 'N') {
  alert('Sorry, I actually am! I\'ll be 40 this year');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
myState = prompt('Was I born in WA?');
console.log('Born in WA?', myState);
if (myState.toUpperCase() === 'Y') {
  alert('Nope! I\'m from Illinois');
} else if (myState.toUpperCase() === 'N') {
  alert('You would be correct!');
  userScore++;
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
myHobby = prompt('Do I like to hike?');
console.log('Do I hike?', myHobby);
if (myHobby.toUpperCase() === 'Y') {
  alert('Aboslutely! Every weekend!');
  userScore++;
} else if (myHobby.toUpperCase() === 'N') {
  alert('Sorry, I hate being stuck inside!');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
myCrash = prompt('I used to fly for the military. Was I ever involved in a midair incident?');
console.log('Plane Crash!!', myCrash);
if (myCrash.toUpperCase() === 'Y') {
  alert('You\'re right! We nearly died once.');
  userScore++;
} else if (myCrash.toUpperCase() === 'N') {
  alert('Unfortunately you\'re wrong! We nearly crashed once.');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
mySiblings = prompt('Do I have any siblings?');
console.log('Do I have Siblings?', mySiblings);
if (mySiblings.toUpperCase() === 'Y') {
  alert('Right! I have two siblings who are both much older than me!');
  userScore++;
} else if (mySiblings.toUpperCase() === 'N') {
  alert('I actually have two siblings! Both older!');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}

myNumber = 31;
usedGuesses = 0;
userGuess = prompt('I was a hockey goaltender for 10 years. Can you guess what number I wore?');
usedGuesses++;
parseInt(userGuess);
while (userGuess !== myNumber && usedGuesses !== 4) {
  if (userGuess < myNumber) {
    alert('You are too low, try again!');
    userGuess = prompt('Try Again, enter another number.');
    usedGuesses++;
  } else if (userGuess > myNumber) {
    alert('You are too high, try a different number.');
    userGuess = prompt('Try Again, enter another number.');
    usedGuesses++;
  } else {
    alert('You got it!');
    userScore++;
    break;
  }
}

myStates = ['illinois', 'pennsylvania'];
stateGuesses = 1;
guessState = prompt('Can you guess where I lived besides Washington?');
var running = true;
while (stateGuesses < 7 && running) {
  // console.log({guessState});
  // console.log({stateGuesses});
  for (var i = 0; i < myStates.length; i++) {
    if (myStates[i] === guessState) {
      // console.log({myStates[i]});
      alert('You are correct!');
      userScore++
      running = false;
      break;
    }
  }
  if (running === true) {
    guessState = prompt('Try again! You have used ' + stateGuesses + ' Enter another state');
    stateGuesses++;
  }
  if (stateGuesses === 7) {
    alert('You have run out of guesses, the correct answers were Illinois and Pennsylvania');
    running = false;
    break;
  }
}
finalTally = alert('Congrats! You scored '+ userScore + ' out of a possible 7');