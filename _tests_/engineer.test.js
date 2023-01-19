const Engineer = require("../lib/Engineer");
const { describe, it, expect } = require("vitest");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create a new engineer with a name, id, email, and github if provided valid arguments", () => {
      const obj = new Engineer();
      expect("name" in obj).toEqual(true);
    });

    it("Should set 'name' when created", () => {
      const name = "Craig";
      const obj = new Engineer(name);
      expect(obj.name).toEqual(name);
    });

    it("Should set 'id' when created", () => {
      const id = Number;

      const obj = new Engineer(id);
      expect(obj.id).toEqual(id);
    });

    it("Should set 'email' when created", () => {
      const email = "";

      const obj = new Engineer(email);
      expect(obj.email).toEqual(email);
    });
  });
});

describe("Github", () => {
  it("Should set 'github' when created", () => {
    const github = "craigthegreat";

    const obj = new Engineer(github);
    expect(obj.github).toEqual(github);
  });
});

describe("Role", () => {
  it("Should return the role of the engineer", () => {
    const engineer = new Engineer("Engineer");
    expect(engineer.getRole()).toBe("Engineer");
  });
});
