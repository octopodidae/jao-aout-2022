import { querySelector } from "./../src/Utils";
import { keys } from "../src/Utils";

describe("utils", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  test("keys returns Object.keys()", () => {
    expect(keys({ toto: 123, titi: false })).toStrictEqual(["toto", "titi"]);
  });
});
