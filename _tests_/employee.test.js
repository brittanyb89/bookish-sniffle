import employee from "../lib/employee";
import { describe, it, expect } from "vitest";

// Unit test that is failing
describe("Employee", () => {
  it("Should create a new employee with a name, id, and email if provided valid arguments", () => {
    expect(new employee("Chloe", 5528, "chloejones@email.com")).toBe(false);
  });

  it("Should throw an error if no name was provided", () => {
    expect(() => new employee()).toThrow("You must provide a name");
  });

  it("Should throw an error if no email was provided", () => {
    expect(() => new employee()).toThrow("You must provide an email");
  });
});

// Unit test that is passing
describe("getName", () => {
  it("Should return the name of the employee", () => {
    const employee = new employee("Chloe");
    expect(employee.getName()).toBe("Chloe");
  });
});

describe("getId", () => {
  it("Should return the id of the employee", () => {
    const employee = new employee(5528);
    expect(employee.getId()).toBe(5528);
  });
}, 10000);

describe("getEmail", () => {
  it("Should return the email of the employee", () => {
    const employee = new employee("chloejones@email.com");
    expect(employee.getEmail()).toBe("chloejones@email.com");
  });
});

describe("getRole", () => {
  it("Should return the role of the employee", () => {
    const employee = new employee("Employee");
    expect(employee.getRole()).toBe("Employee");
  });
}, 10000);
