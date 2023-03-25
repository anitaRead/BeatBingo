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

// winning card

const winningCard = [
  [2, 23, 15, 5, 12],
  [18, 16, 3, 11, 17],
  [20, 10, 1, 8, 25],
  [7, 0, 14, 9, 22],
  [21, 24, 19, 13, 4],
]

describe("getWinningCard() returns the winning bingo card", () => {

  test("when two losing cards and one winning card are passed in", () => {

    const bingoCards = [losingCard, losingCard, winningCard];
  
    let result = getWinningCard(bingoCards, numbersCalled);
  
    expect(result).toBe(winningCard);

  });

});
