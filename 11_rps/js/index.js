/* lab 11_rps

* When you click a button, the computer picks a move with the getRandomPlay() function
* Update the scoreboard in the event of a win
* Display the player moves and who won below the scoreboard
* See this website for what the solution would look like:
*   https://pages.git.generalassemb.ly/fewd201810/class-resources/teacher/11_rps/
*/

let yourScore = 0;
let computerScore = 0;

// use this function to figure out how the computer plays each move
// DO NOT EDIT THIS FUNCTION. just use it in the code you right
function getRandomPlay() {
  // define the possible plays in an array of strings
  let plays = ['rock', 'paper', 'scissors'];
  // randomly select one of those options
  let play = plays[Math.floor(Math.random() * plays.length)];
  // return the randomly selected option
  return play;
}


$('#rockButton').click(function(){
    let computerResult = getRandomPlay();
    $('#choice').html("The computer plays "+ computerResult+" you plays rock");
    if (computerResult === "paper"){
      console.log("you lose");
      computerScore += 1;
      $('#computerScore').html(computerScore);
      $('#status').html("you lose");
    } else if(computerResult === "scissors"){
      console.log("you win");
      yourScore += 1;
      $('#humanScore').html(yourScore);
      $('#status').html("you win");
    } else if(computerResult === "rock"){
      console.log("you tie");
      $('#humanScore').html(yourScore);
      $('#status').html("you tie");
    }
  })


  $('#paperButton').click(function(){
        let computerResult = getRandomPlay();
        $('#choice').html("The computer plays "+ computerResult+" you plays paper");
        if (computerResult === "scissors"){
          console.log("you lose");
          computerScore += 1;
          $('#computerScore').html(computerScore);
          $('#status').html("you lose");
      }else if(computerResult === "rock"){
          console.log("you win");
          yourScore += 1;
          $('#humanScore').html(yourScore);
          $('#status').html("you win");
      }else if(computerResult === "paper"){
          console.log("you tie");
          $('#humanScore').html(yourScore);
          $('#status').html("you tie");
        }
      })

    $('#scissorsButton').click(function(){
          let computerResult = getRandomPlay();
          $('#choice').html("The computer plays "+ computerResult+" you plays scissors");
          if (computerResult === "rock"){
            console.log("you lose");
            computerScore += 1;
            $('#computerScore').html(computerScore);
            $('#status').html("you lose");
        }else if(computerResult === "paper"){
            console.log("you win");
            yourScore += 1;
            $('#humanScore').html(yourScore);
            $('#status').html("you win");
          }else if(computerResult === "scissors"){
            console.log("you tie");
            $('#humanScore').html(yourScore);
            $('#status').html("you tie");
          }
        })
//human play stone
//cpu: getRandomPlay
// if (play= paper) print you lose/ and add one to computer score
//
