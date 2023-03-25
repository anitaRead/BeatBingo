const canIWinBingo = require("./bingoP1");

const numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

describe("canIWinBingo() returns true", () => {
  test("when a card has a winning row", () => {
    // winning row [0]
    let winningBingoCard = [
      [7, 4, 9, 5, 11], 
      [17, 16, 13, 100, 44],
      [23, 18, 20, 100, 44],
      [0, 1, 25, 100, 44],
      [88, 1, 25, 100, 44],
    ];

    let result = canIWinBingo(winningBingoCard, numbersCalled);

    expect(result).toBe(true);
  });

  test("when a card has a winning column", () => {
    // winning column [0]
    let winningBingoCard = [
      [7, 4, 9, 5, 44], 
      [4, 16, 13, 100, 44],
      [9, 18, 20, 100, 44],
      [5, 1, 25, 100, 44],
      [11, 1, 25, 100, 44],
    ];

    let result = canIWinBingo(winningBingoCard, numbersCalled);

    expect(result).toBe(true);
  });
});

describe("canIWinBingo() returns false", () => {
  test("when a card has no winning row or column", () => {
    // Called numbers do not include 100 or 44
    let losingBingoCard = [
      [5, 1, 25, 100, 44],
      [5, 1, 25, 100, 44],
      [5, 1, 25, 100, 44],
      [5, 1, 25, 100, 44],
      [44, 100, 44, 100, 44],
    ];

    let result = canIWinBingo(losingBingoCard, numbersCalled);

    expect(result).toBe(false);
  });

  test("when an empty numbersCalled array is passed in", () => {
    let bingoCard = [
      [7, 4, 9, 5, 44], 
      [4, 16, 13, 100, 44],
      [9, 18, 20, 100, 44],
      [5, 1, 25, 100, 44],
      [11, 1, 25, 100, 44],
    ];
    let emptyNumbersCalled = [];

    let result = canIWinBingo(bingoCard, emptyNumbersCalled);

    expect(result).toBe(false);
  })

  test("when an empty bingoCard is passed in", () => {
    let emptyBingoCard = [];

    let result = canIWinBingo(emptyBingoCard, numbersCalled);

    expect(result).toBe(false);
  })

  test("when an empty bingoCard and numbersCalled array are passed in", () => {
    let result = canIWinBingo([], []);
    expect(result).toBe(false);
  })

});
