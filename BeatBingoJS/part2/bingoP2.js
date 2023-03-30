const fs = require("fs");

/*
  parseInput() parses the text from ./input.txt and returns the numbersCalled and bingoCards within it
  
  getWinningCard() takes numbersCalled and bingoCards and checks each card to see if it can win a game of bingo
    - If there is a winning bingo card, it will return that bingo card
    - If there are multiple winning bingo cards it will return the first option
    - If there is no winning bingo card it will return false

  Assumptions made:
    - Bingo card is 5x5 matrix
    - Diagonals don't count
    - Only three bingo cards will be in the input.txt file
    - Each card is separated by a new line
*/

const parseInput = (data) => {
  const rows = data.trim().split("\n");
  const separationLine = rows.findIndex((row) => row.trim() === "");

  // Numbers called array
  const numbersCalled = rows[0]
    .split(",")
    .map((numberString) => parseInt(numberString));

  const cardRows = rows
    .slice(separationLine + 1)
    .filter((row) => row.trim() !== "");

  // Bingo cards array
  const bingoCards = [];
  for (let i = 0; i < 3; i++) {
    const card = cardRows.slice((i * 5), (i * 5 + 5)).map((row) =>
      row
        .split(" ")
        .filter((str) => str !== "")
        .map((str) => parseInt(str))
    );

    bingoCards.push(card);
  }

  return { bingoCards, numbersCalled };
};

const getWinningCard = (bingoCards, numbersCalled) => {
  let rowLength = 5;
  let columnLength = 5;

  // Loop through all bingo cards
  for (let i = 0; i < bingoCards.length; i++) {
    let currentBingoCard = bingoCards[i];

    // Loop through current bingo card
    for (let j = 0; j < currentBingoCard.length; j++) {
      let matchingNumbers = [];

      // Check each row
      matchingNumbers = currentBingoCard[j].filter((number) =>
        numbersCalled.includes(number)
      );
      if (matchingNumbers.length === rowLength) {
        return currentBingoCard;
      }

      // Check each column
      let column = [];
      for (let k = 0; k < currentBingoCard.length; k++) {
        column.push(currentBingoCard[k][j]);
      }

      matchingNumbers = column.filter((number) =>
        numbersCalled.includes(number)
      );

      if (matchingNumbers.length === columnLength) {
        return currentBingoCard;
      }
    }
  }

  // Return false if there is no winning card
  return false;
};

const input = fs.readFileSync("part2/input.txt", "utf8");
const { bingoCards, numbersCalled } = parseInput(input);

let winningCard = getWinningCard(bingoCards, numbersCalled);

if (winningCard) {
  console.log("You can win bingo with this card!");
  console.log(winningCard);
} else {
  console.log("You can not win bingo with these cards!");
}

module.exports = { getWinningCard, parseInput };
