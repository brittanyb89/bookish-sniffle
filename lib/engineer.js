class Engineer {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
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
// class GitHub {
//   constructor(github) {
//     this.github = github;
//   }
// }

// module.exports = { Name, ID, Email, GitHub };
module.exports = Engineer;
