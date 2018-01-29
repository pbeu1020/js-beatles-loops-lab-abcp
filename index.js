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
  

/*
// 
function iLoveTheBeatles() {
  var newArray = [];
  var i = 0;
  do {
      = "The number is ";
    i++;
  }
while (i < 10);
   
}
*/
