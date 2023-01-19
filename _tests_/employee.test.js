import { describe, expect, it } from "vitest";
import employee from "../lib/employee";

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create a new employee with a name, id, and email if provided valid arguments", () => {
      const obj = new employee();

      expect("name" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Chloe";

      const obj = new employee(name);
      expect(obj.name).toEqual(name);
    });

    it("should set 'id' when created", () => {
      const id = Number;

      const obj = new employee(id);
      expect(obj.id).toEqual(id);
    });

    it("Should set 'email' when created", () => {
      const email = "";

      const obj = new employee(email);
      expect(obj.email).toEqual(email);
    });
  });
});
