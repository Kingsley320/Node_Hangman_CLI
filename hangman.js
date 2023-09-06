let fs = require("fs");
let readLine = require("readline");
let name = "new player";
let gameMode = "easy";
let life = 3;
let points = 0;
let time = 40;

let rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getName() {
  rl.question("What is your name? \n", (userInput1) => {
    name = userInput1;
    getMode();
  });
}

function getMode() {
  rl.question(
    `
    chose a game mode:
    Easy(1), Medium(2), Hard(3)
    `,
    (mode) => {
      switch (mode) {
        case "1":
          gameMode = "easy";
          break;
        case "2":
          gameMode = "medium";
          break;
        case "3":
          gameMode = "hard";
          break;
      }
      // console.log(`mode ${gameMode} chosen`);
      startGame();
    }
  );
}

function randomWordGen() {
  let randomNo = Math.floor(Math.random() * 6);

  let questions = [
    { mode: "easy", words: ["one", "two", "six", "ten", "try", "man"] },
    {
      mode: "medium",
      words: ["medium", "guava", "mango", "seven", "mouth", "marker"],
    },
    {
      mode: "hard",
      words: [
        "heptagon",
        "sorghum",
        "processor",
        "monotone",
        "congruence",
        "chandalier",
      ],
    },
  ];
  let modeQuestions = questions.find((mode) => mode.mode == gameMode).words;
  let randomWord = modeQuestions[randomNo];
  // console.log(randomNo);
  // console.log(modeQuestions[randomNo]);
  return randomWord;
}

let usedWords = [];
function startGame() {
  rl.setPrompt(`
  Name: ${name}  Points: ${points}  Lives: ${life}  time: ${time}
      Mode: ${gameMode} 
      `);
  let ques = rl.prompt();
  window.getSelection().setPosition(ques, 0)

  let currWord = randomWordGen();
  usedWords.push(currWord);
  // console.log(currWord, usedWords);
  
  // loop the word to pick random index
  let randomIndex = Math.floor(Math.random()* currWord.length)
    console.log("Random Index:", randomIndex )
    // for (var i=0 ;i<currWord.length; ++i){

    // }
}
// quick start for game
startGame()

function highScore() {
  console.log("High scores:");
  fs.readFile("highscore.txt", "utf8", (err, file) => {
    console.log(err ? "Error reading file" : file);
  });
}
function exitGame() {
  console.log(`Thanks for playing, ${name}`);
  rl.close();
}

// setTimeout(() => {
//   rl.question(
//     `
//     Hey there. 
//     Welcome to hangman,
//     Pick the missing letters from the words displayed.
//     If you are right, you get 5 points, else,after 3 fails, the frog dies
//     Press 1 - New game. 2 - High Score. 3 - Exit game
//     `,
//     (option) => {
//       switch (option) {
//         case "1":
//           getName();
//           break;

//         case "2":
//           highScore();
//           break;

//         case "3":
//           exitGame();
//           break;
//       }
//     }
//   );
// }, 2000);
