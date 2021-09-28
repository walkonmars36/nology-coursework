import {getName} from "./index.js";

it("Should return the string 'Mark, 55 years old.'", () => {
  const output = getName("Mark", 55);
  expect(output).toBe("Mark, 55 years old.");
});

it("Should return the string 'Jude, 49 years old.'", () => {
  const output = getName("Jude", 49);
  expect(output).toBe("Jude, 49 years old.");
});

// to test run - npm test index.test.js
