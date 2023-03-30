import { canIWinBingo } from "./bingoP1";

const numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

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
});
