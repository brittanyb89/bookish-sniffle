const Manager = require("../lib/Manager");
const { describe, it, expect } = require("vitest");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create a new manager with a name, id, email, and office number if provided valid arguments", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Tracy";

      const obj = new Manager(name);
      expect(obj.name).toEqual(name);
    });

    it("Should throw an error if no name was provided", () => {
      expect(() => new Manager()).toThrow("You must provide a name");
    });

    it("Should throw an error if no email was provided", () => {
      expect(() => new Manager()).toThrow("You must provide an email");
    });

    it("Should throw an error if no office number was provided", () => {
      expect(() => new Manager()).toThrow("You must provide an office number");
    });
  });
});

describe("OfficeNumber", () => {
  it("Should return the office number of the manager", () => {
    const manager = new Manager("123");
    expect(manager.getOfficeNumber()).toBe("123");
  });
});

describe("Role", () => {
  it("Should return the role of the manager", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
  });
});
