const Manager = require("../lib/Manager");
const { describe, it, expect } = require("vitest");

// Unit test for manager; failing test
describe("Manager", () => {
  it("Should create a new manager with a name, id, email, and office number if provided valid arguments", () => {
    expect(
      new Manager("Tracy", 4578, "tracymoor@email.com", 314 - 555 - 5778)
    ).toBe(false);
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

// Unit test for manager; passing test
describe("getOfficeNumber", () => {
  it("Should return the office number of the manager", () => {
    const manager = new Manager(
      "Tracy",
      4578,
      "tracymoore@email.com",
      314 - 555 - 5778
    );
    expect(manager.getOfficeNumber()).toBe(314 - 555 - 5778);
  });
});

describe("getRole", () => {
  it("Should return the role of the manager", () => {
    const manager = new Manager("Manager");
    expect(manager.getRole()).toBe("Manager");
  });
});
