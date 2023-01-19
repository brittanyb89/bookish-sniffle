const intern = require("../lib/intern");
const { describe, it, expect } = require("vitest");
const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create a new intern with a name, id, email, and school if provided valid arguments", () => {
      const obj = new intern();

      expect("name" in obj).toEqual(true);
    });

    it("Should set 'id' when created", () => {
      const id = Number;

      const obj = new Intern(id);
      expect(obj.id).toEqual(id);
    });

    it("Should set 'email' when created", () => {
      const email = "";

      const obj = new Intern(email);
      expect(obj.email).toEqual(email);
    });
  });
});

describe("School", () => {
  it("Should return the school of the intern", () => {
    const intern = new intern("WUSTL");
    expect(intern.getSchool()).toBe("WUSTL");
  });
});

describe("Role", () => {
  it("Should return the role of the intern", () => {
    const intern = new intern("Intern");
    expect(intern.getRole()).toBe("Intern");
  });
});
