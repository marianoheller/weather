const sortLogLines = require("./3");

describe("question 1", () => {
  test("example input/output", () => {
    const input = [
      "b12 8 3 5 2",
      "v1 err var",
      "ap9 3 9",
      "hf2 err var",
      "t12 goog  ana",
      "u2 fa handle err"
    ];
    const output = [
      "hf2 err var",
      "v1 err var",
      "u2 fa handle err",
      "t12 goog  ana",
      "b12 8 3 5 2",
      "ap9 3 9"
    ];
    expect(sortLogLines(input)).toEqual(output);
  });
});
