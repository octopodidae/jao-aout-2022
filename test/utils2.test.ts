import { querySelector } from "../src/Utils";
import { keys } from "../src/Utils";

describe("utils-querySelector", () => {
  afterEach(() => {
    jest.restoreAllMocks();
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
