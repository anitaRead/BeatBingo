const { getWinningCard, parseInput } = require("./bingoP2");

const numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

// Losing card

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
];

// Winning card with five numbers in a column

const winningCardColumn = [
  [2, 39, 77, 66, 44],
  [18, 16, 3, 11, 75],
  [20, 10, 1, 8, 64],
  [7, 0, 14, 9, 90],
  [21, 24, 19, 13, 37],
];

describe("parseInput()", () => {
  test("returns correct numbersCalled and bingoCard arrays", () => {
    const input = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

      22 13 17 11 0
      8 2 23 4 24
      21 9 14 16 7
      6 10 3 18 5
      1 12 20 15 19

      3 15 0 2 22
      9 18 13 17 5
      19 8 7 25 23
      20 11 10 24 4
      14 21 16 12 6

      14 21 17 24 4
      10 16 15 9 19
      18 8 23 26 20
      22 11 13 6 5
      2 0 12 3 7`;

    const expectedOutput = {
      bingoCards: [
        [
          [22, 13, 17, 11, 0],
          [8, 2, 23, 4, 24],
          [21, 9, 14, 16, 7],
          [6, 10, 3, 18, 5],
          [1, 12, 20, 15, 19],
        ],
        [
          [3, 15, 0, 2, 22],
          [9, 18, 13, 17, 5],
          [19, 8, 7, 25, 23],
          [20, 11, 10, 24, 4],
          [14, 21, 16, 12, 6],
        ],
        [
          [14, 21, 17, 24, 4],
          [10, 16, 15, 9, 19],
          [18, 8, 23, 26, 20],
          [22, 11, 13, 6, 5],
          [2, 0, 12, 3, 7],
        ],
      ],
      numbersCalled: [
        7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
        18, 20, 8, 19, 3, 26, 1,
      ],
    };

    let result = parseInput(input);

    expect(result).toEqual(expectedOutput);
  });
});

describe("getWinningCard() returns the winning bingo card", () => {
  test("when two losing cards and one winning card (5 in a row) are passed in", () => {
    const bingoCards = [losingCard, losingCard, winningCardRow];

    let result = getWinningCard(bingoCards, numbersCalled);

    expect(result).toBe(winningCardRow);
  });

  test("when two losing cards and one winning card (5 in a column) are passed in", () => {
    const bingoCards = [losingCard, losingCard, winningCardColumn];

    let result = getWinningCard(bingoCards, numbersCalled);

    expect(result).toBe(winningCardColumn);
  });

  test("when three winning cards are passed in it will return the first one", () => {
    const bingoCards = [winningCardRow, winningCardColumn, winningCardRow];

    let result = getWinningCard(bingoCards, numbersCalled);

    expect(result).toBe(winningCardRow);
    expect(result.length).toBe(5);
    expect(result).not.toContain(winningCardColumn);
  });
});

describe("getWinningCard() returns false", () => {
  test("when three losing cards are passed in", () => {
    const bingoCards = [losingCard, losingCard, losingCard];

    let result = getWinningCard(bingoCards, numbersCalled);

    expect(result).toBe(false);
  });
});
