const getWinningCard = require("./bingoP2");

const numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

// losing card

const losingCard = [
  [2, 23, 15, 5, 92],
  [18, 16, 3, 83, 76],
  [20, 44, 1, 8, 65],
  [7, 0, 14, 9, 100],
  [44, 33, 77, 82, 99],
];

// Winning card with five numbers in a row

const winningCardRow = [
  [2, 23, 15, 5, 12],
  [23, 16, 3, 11, 44],
  [15, 10, 1, 8, 44],
  [5, 0, 14, 9, 44],
  [100, 88, 66, 72, 44],
]

// Winning card with five numbers in a column

const winningCardColumn = [
  [2, 39, 77, 66, 44],
  [18, 16, 3, 11, 75],
  [20, 10, 1, 8, 64],
  [7, 0, 14, 9, 90],
  [21, 24, 19, 13, 37],
]

describe("getWinningCard() returns the winning bingo card", () => {

  test("when two losing cards and one winning card are passed in", () => {

    const bingoCards = [losingCard, losingCard, winningCardRow];
  
    let result = getWinningCard(bingoCards, numbersCalled);
  
    expect(result).toBe(winningCardRow);

  });

  test("when two losing cards and one winning card are passed in", () => {

    const bingoCards = [losingCard, losingCard, winningCardColumn];
  
    let result = getWinningCard(bingoCards, numbersCalled);
  
    expect(result).toBe(winningCardColumn);

  });

});

describe("getWinningCard() returns false", () => {

  test("when three losing cards are passed in", () => {

    const bingoCards = [losingCard, losingCard, losingCard];
  
    let result = getWinningCard(bingoCards, numbersCalled);
  
    expect(result).toBe(false);

  });

});
