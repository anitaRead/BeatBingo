const fs = require("fs");

/*
  parseInput() parses the text from ./input.txt and returns the numbersCalled and bingo card within it.
  canIWinBingo() checks each row and column of the bingo card for 5 matching numbers in a row
    - If there is a winning row or column the function will return true
    - If there is not a winning row or column the function will return false

  Assumptions made:
    - Bingo card is 5x5 matrix
    - Diagonals don't count
    - Only one bingo card will be in the input.txt file
*/

const parseInput = (data) => {
  const rows = data.trim().split("\n");
  const separationLine = rows.findIndex((row) => row === "");

  // Numbers called array
  const numbersCalled = rows[0]
    .split(",")
    .map((numberString) => parseInt(numberString));

  const cardRows = rows.slice(separationLine + 1);

  // Bingo card array
  const bingoCard = cardRows.map((row) =>
    row
      .split(" ")
      .filter((str) => str !== "")
      .map((str) => parseInt(str))
  );

  return { bingoCard, numbersCalled };
};

const canIWinBingo = (bingoCard, numbersCalled) => {
  let rowLength = 5;
  let columnLength = 5;

  // Check for invalid bingo card or numbers called array
  if (bingoCard.length !== rowLength || numbersCalled.length < 1) {
    return false;
  }

  // Check each row
  for (let i = 0; i < rowLength; i++) {
    let matchingNumbers = bingoCard[i].filter((number) =>
      numbersCalled.includes(number)
    );

    if (matchingNumbers.length === rowLength) {
      return true;
    }
  }

  // Check each column
  for (let i = 0; i < columnLength; i++) {
    let matchingNumbers = [];

    for (let j = 0; j < rowLength; j++) {
      if (numbersCalled.includes(bingoCard[j][i])) {
        matchingNumbers.push(bingoCard[j][i]);
      }
    }

    if (matchingNumbers.length === columnLength) {
      return true;
    }
  }

  // Return false if card can not win
  return false;
};

const input = fs.readFileSync("part1/input.txt", "utf8");
const { bingoCard, numbersCalled } = parseInput(input);
let canWin = canIWinBingo(bingoCard, numbersCalled);

if (canWin) {
  console.log("You can win bingo with this card!");
  console.log(bingoCard);
} else {
  console.log("You can not win bingo with this card!");
}

module.exports = {
  canIWinBingo,
  parseInput,
};
