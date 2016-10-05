function countLetters(myString) {
  var myObject = {};
  for (letter of myString) {
    if (letter !== " ") {
      if (myObject[letter]) {
        myObject[letter] += 1;
      }
      else {
        myObject[letter] = 1;
      }
    }
  }
  return myObject;
}
