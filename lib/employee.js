// class Name {
//   constructor(first, last) {
//     this.first = first;
//     this.last = last;
//   }
// }

// class ID {
//   constructor(id) {
//     this.id = id;
//   }
// }

// class Email {
//   constructor(email) {
//     this.email = email;
//   }
// }

// module.exports = { Name, ID, Email };
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
