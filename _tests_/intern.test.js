const intern = require("../lib/intern");
const { describe, it, expect } = require("vitest");

// Unit test for intern; failing test
describe("Intern", () => {
  it("Should create a new intern with a name, id, email, and school if provided valid arguments", () => {
    expect(new intern("Stacey", 6690, "sprice@email.com", "WUSTL")).toBe(false);
  });

  it("Should throw an error if no name was provided", () => {
    expect(() => new intern()).toThrow("You must provide a name");
  });

  it("Should throw an error if no email was provided", () => {
    expect(() => new intern()).toThrow("You must provide an email");
  });

  it("Should throw an error if no school was provided", () => {
    expect(() => new intern()).toThrow("You must provide a school");
  });
});

// Unit test for intern; passing test
describe(
  "getSchool",
  () => {
    it("Should return the school of the intern", () => {
      const intern = new intern("WUSTL");
      expect(intern.getSchool()).toBe("WUSTL");
    });
  },

  describe("getRole", () => {
    it("Should return the role of the intern", () => {
      const intern = new intern("Intern");
      expect(intern.getRole()).toBe("Intern");
    });
  })
);
