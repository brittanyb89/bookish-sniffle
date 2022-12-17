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

class officeNumber {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }
}

module.exports = { Name, ID, Email, officeNumber };
