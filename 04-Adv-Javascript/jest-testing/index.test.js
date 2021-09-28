import {getName} from "./index.js";

it("Should return the string 'Mark, 55 years old.'", () => {
  const output = getName("Mark", 55);
  expect(output).toBe("Mark, 55 years old.");
});
