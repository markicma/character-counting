function letterIndices(myString) {
  var myObject = {};
  for (index in myString) {
    var letter = myString[index];

    if (letter !== " ") {

      if (myObject[letter]) {
        myObject[letter].push(Number(index));
      }
      else {
        myObject[letter] = [Number(index)];
      }
    }
  }
  return myObject;
}

letterIndices("lighthouse in the house");


// Should return:
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
