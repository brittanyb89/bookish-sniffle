const Engineer = require("../lib/Engineer");
const { describe, it, expect } = require("vitest");

// Unit test for engineer; failing test
describe("Engineer", () => {
  it("Should create a new engineer with a name, id, email, and github if provided valid arguments", () => {
    expect(
      new Engineer("Craig", 5908, "craigthegreat@email.com", "craigthegreat")
    ).toBe(false);
  });

  it("Should throw an error if no name was provided", () => {
    expect(() => new Engineer()).toThrow("You must provide a name");
  });

  it("Should throw an error if no email was provided", () => {
    expect(() => new Engineer()).toThrow("You must provide an email");
  });

  it("Should throw an error if no github was provided", () => {
    expect(() => new Engineer()).toThrow("You must provide a github");
  });
});

// Unit test for engineer; passing test
describe("getGithub", () => {
  it("Should return the github of the engineer", () => {
    const engineer = new Engineer(
      "Craig",
      5908,
      "craigthegreat@email.com",
      "craigthegreat"
    );
    expect(engineer.getGithub()).toBe("craigthegreat");
  });
});

describe("getRole", () => {
  it("Should return the role of the engineer", () => {
    const engineer = new Engineer("Engineer");
    expect(engineer.getRole()).toBe("Engineer");
  });
}, 10000);
