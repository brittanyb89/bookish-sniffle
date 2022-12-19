const inquirer = require("inquirer");
const employee = require("./employee");
const engineer = require("./engineer");
const intern = require("./intern");
const manager = require("./manager");

// The Team constructor is responsible for keeping a roster of added team members and controlling the flow of the application.
class Team {
  constructor() {
    this.teamMember = [];
  }

  addTeamMember() {
    // Create random ID number for each team member added
    this.newID();
    this.teamMember.push(new employee());
  }

  // Creates a new ID number for team member using a random number from the array of numbers
  newID() {
    return Math.floor(Math.random() * 1000)
  }
}

// Ask user if they want to add a new team member
askToAddNewMember() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "newMember",
        message: "Would you like to add a new team member?",
      },
    ])
    // If user selects yes, add a new team member
    // If user selects no, end the application with a thank you message
    .then((response) => {
      if (response.newMember) {
        this.addTeamMember();
      } else {
        console.info("Thank you for using the Team Profile Generator!");
      }
    });
}

// Ask user what type of team member they want to add
askForTeamMemberType() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Manager", "Employee", "None"],
      },
    ])
    // If user selects Engineer, add a new engineer
    // If user selects Intern, add a new intern
    // If user selects Manager, add a new manager
    // If user selects Employee, add a new employee
    // If user selects None, end the application with a thank you message
    .then((response) => {
      switch (response.teamMemberType) {
        case "Engineer":
          this.teamMember.push(new engineer());

        case "Intern":
          this.teamMember.push(new intern());

        case "Manager":
          this.teamMember.push(new manager());

        case "Employee":
          this.teamMember.push(new employee());

        case "None":
          console.info("Thank you for using the Team Profile Generator!");
      }
    });
}


module.exports = Team;
