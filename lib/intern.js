class Name {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

class ID {
  constructor(id) {
    this.id = id;
  }
}

class Email {
  constructor(email) {
    this.email = email;
  }
}

class School {
  constructor(school) {
    this.school = school;
  }
}

module.exports = { Name, ID, Email, School };
