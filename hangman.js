let fs = require("fs");
let readLine = require("readline");
let name = "new player";

let rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getName() {
  rl.question("What is your name? \n", (userInput1) => {
    // console.log("Hi " + userInput1);
    name = userInput1;
    console.log("Are you ready, " + name + " ?");
  });
}

function startGame() {
    getName()
    console.log('game started');
}
function highScore() {
    rl.readFile;
    console.log('game started');
}
function exitGame() {
  console.log(`Thanks for playing, ${name}`);
  rl.close();
}

setTimeout(() => {
  rl.question(
    `
    Hey there. 
    Welcome to hangman,
    Press 1 - New game. 2 - High Score. 3 - Exit game
    `,
    (option) => {
      switch (option) {
        case '1':
          startGame();
          break;

        case '2':
          highScore();
          break;

        case '3':
          exitGame();
          break;
      }
    }
  );
}, 2000)
