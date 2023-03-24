const canIWinBingo = require("./bingoP1");

numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

describe("canIWinBingo() returns true", () => {
  test("when a card has 5 winning numbers in a row", () => {
    winningBingoCard = [
      [7, 4, 9, 5, 11], // winning row
      [17, 16, 13, 100, 44],
      [23, 18, 20, 100, 44],
      [0, 1, 25, 100, 44],
      [88, 1, 25, 100, 44],
    ];

    let result = canIWinBingo(winningBingoCard, numbersCalled);

    expect(result).toBe(true);
  });
});
