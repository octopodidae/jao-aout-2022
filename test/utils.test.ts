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

  test("querySelector works", () => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    const elt = querySelector("input");
    if (!(elt instanceof HTMLInputElement)) {
      throw new Error("non");
    }
    expect(elt).toBeDefined();
  });

  //   test("querySelector does not have right type", () => {
  //     const input = document.createElement("input");
  //     document.body.appendChild(input);
  //     const elt = querySelector("input");
  //     if (!(elt instanceof HTMLAnchorElement)) {
  //       throw new Error("non");
  //     }
  //     expect(elt).toBeDefined();
  //   });

  test("querySelector throw an error", () => {
    let foundError = false;
    try {
      const elt = querySelector("hheheh");
    } catch (err) {
      if (!(err instanceof Error)) {
        throw new Error("non");
      }
      expect(err.message).toMatch(/Cannot find selector: /);
      foundError = true;
    }
    expect(foundError).toStrictEqual(true);
  });
});
