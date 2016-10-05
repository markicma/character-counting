function countLetters(myString) {
  var noSpaces = myString.split(" ").join("")
  var myObject = {};
  for (letter of noSpaces) {
    if (myObject[letter]) {
      myObject[letter] += 1;
    }
    else {
      myObject[letter] = 1;
    }
  }
  return myObject;
}
