// 
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  var i;
  for (i=0; i < musicians.length; i++) {
    newArray[i]=musicians[i] + ' plays ' + instruments[i];
  }
  return newArray; 
}

// 
function johnLennonFacts(facts) {
  var i=0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!'; 
    i++;
  }
  return facts;
}

// 
function iLoveTheBeatles(n) {
  var newArray = [];
  do {
    newArray[i] = "I love the Beatles!";
    i++;
  }
  while (n < 15);
  return newArray;
}
