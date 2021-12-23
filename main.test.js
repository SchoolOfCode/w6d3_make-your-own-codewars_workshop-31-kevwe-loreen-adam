//👉 Write your tests below here:

import { highestScores } from "./main.js";

describe("Passing", function () {
  test("Return the bootcampers with passing grades above a score of 5", function () {
    //arrange
    const expected = [
      { name: "Adam", score: 8 },
      { name: "Joe", score: 10 },
      { name: "Mariah", score: 6 },
    ];
    //act
    const actual = highestScores;
    //assert
    expect(actual).toStrictEqual(expected);
  });
});
