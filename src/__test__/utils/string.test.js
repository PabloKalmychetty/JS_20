"use strict"
import { string } from "../../utils/string.js";

describe("tests for string function", 
() => {
  it("should reverse string", () => expect(string("abc")).toBe("cba"));
});