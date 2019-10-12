const getFirstUnique = require("./2");

describe("question 1", () => {
  test("example input/output", () => {
    const input = "teeter";
    const output = "r";
    expect(getFirstUnique(input)).toEqual(output);
  });
  test("random test 1", () => {
    const input = "aaaaaaaaaaaaaaaaaaaaaaaaao";
    const output = "o";
    expect(getFirstUnique(input)).toEqual(output);
  });
  test("random test 2", () => {
    const input = "aoooooooooooooooooooooooo";
    const output = "a";
    expect(getFirstUnique(input)).toEqual(output);
  });
});
