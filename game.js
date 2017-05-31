var computerLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var wins = 0
var losses = 0
var remainder = 9
// var guesses = 9
var wrongLetters = []



//Start 
document.onkeyup = function(event) {

  var userGuess = event.key;

  var updateGuesses = function () {
	document.getElementById('guess').innerHTML = wrongLetters.join(', ');
  }

  function reset() {
	  remainder = 9
      wrongLetters = []

      updateGuesses ();
  };

  wrongLetters.push(userGuess);
  updateGuesses();

  //how comp chooses
  var computerChoice = computerLetter[Math.floor(Math.random() * computerLetter.length)];
  console.log(computerChoice)

    //if/else statements
    if (computerChoice === userGuess) {
	wins++ 
	reset();
    }else{
	remainder--;
    }

    if (remainder === 0) {
	losses++
    reset();
    }



       
    //Getting wins, losses, and remainder to show up
    document.getElementById('wins').innerHTML =  + wins;
          
    document.getElementById('losses').innerHTML =  + losses;
          
    document.getElementById('gRemainder').innerHTML =  + remainder; 
          

          
};



