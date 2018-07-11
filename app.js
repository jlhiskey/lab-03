'use strict';

var userName, myAge, myState, myHobby, myCrash, mySiblings;

userName = prompt('What is your name?');

alert('These questions are answered with a Y or N.');

myAge = prompt('Welcome ' + userName + '. Do you think that I am over 35?');
console.log('am I over 35?', userName);
if (myAge.toUpperCase() === 'Y') {
  alert('You are correct, I am 39.');
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
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
myHobby = prompt('Do I like to hike?');
console.log('Do I hike?', myHobby);
if (myHobby.toUpperCase() === 'Y') {
  alert('Aboslutely! Every weekend!');
} else if (myHobby.toUpperCase() === 'N') {
  alert('Sorry, I hate being stuck inside!');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
myCrash = prompt('I used to fly for the military. Was I ever involved in a midair incident?');
console.log('Plane Crash!!', myCrash);
if (myCrash.toUpperCase() === 'Y') {
  alert('You\'re right! We nearly died once.');
} else if (myCrash.toUpperCase() === 'N') {
  alert('Unfortunately you\'re wrong! We nearly crashed once.');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
mySiblings = prompt('Do I have any siblings?');
console.log('Do I have Siblings?', mySiblings);
if (mySiblings.toUpperCase() === 'Y') {
  alert('Right! I have two siblings who are both much older than me!');
} else if (mySiblings.toUpperCase() === 'N') {
  alert('I actually have two siblings! Both older!');
} else {
  alert('That was not the answer I wanted...Try Y or N next time.');
}
