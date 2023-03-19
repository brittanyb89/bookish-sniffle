const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNUmber() {
    return this.officeNumber;
  }

  getRole() {
    return this.title;
  }
}

module.exports = Manager;
