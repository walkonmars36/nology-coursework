import {Triangle} from "./Triangle.js";

describe("Tests to determine whether or not a shape entered is a triangle", () => {
  describe("equilateral triangle", () => {
    test("all sides are equal", () => {
      const triangle = new Triangle(2, 2, 2);
      expect(triangle.isEquilateral).toBe(true);
    });

    test("no sides are equal", () => {
      const triangle = new Triangle(5, 4, 6);
      expect(triangle.isEquilateral).toBe(false);
    });
  });

  describe("Isosceles triangle", () => {
    test("two sides are equal", () => {
      const triangle = new Triangle(2, 2, 1);
      expect(triangle.isIsosceles).toBe(true);
    });

    test("two sides are not equal", () => {
      const triangle = new Triangle(2, 3, 1);
      expect(triangle.isIsosceles).toBe(false);
    });
  });

  describe("Scalene triangle", () => {
    test("no sides are equal", () => {
      const triangle = new Triangle(3, 2, 1);
      expect(triangle.isScalene).toBe(true);
    });

    test("two or more sides are equal", () => {
      const triangle = new Triangle(2, 2, 1);
      expect(triangle.isScalene).toBe(false);
    });
  });
});
