const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const listMembers = [];

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "school",
        message: "What is your school?",
      },
    ])
    .then((answers) => {
      const internMember = new Intern(
        answers.username,
        answers.id,
        answers.email,
        answers.school
      );
      listMembers.push(internMember);
      console.info(listMembers);
      askMenu();
    });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ])
    .then((answers) => {
      const managerMember = new Manager(
        answers.username,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      listMembers.push(managerMember);
      console.info(listMembers);
      askMenu();
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your github username?",
      },
    ])
    .then((answers) => {
      const engineerMember = new Engineer(
        answers.username,
        answers.id,
        answers.email,
        answers.github
      );
      listMembers.push(engineerMember);
      console.info(listMembers);
      askMenu();
    });
}

function askForTeamMemberType() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    // If user selects Engineer, add a new engineer
    // If user selects Intern, add a new intern
    // If user selects Manager, add a new manager
    // If user selects Employee, add a new employee
    // If user selects None, end the application with a thank you message
    .then((response) => {
      console.info("This is type response: ", response);
      if (response.teamMemberType === "Engineer") {
        addEngineer();
      } else if (response.teamMemberType === "Intern") {
        addIntern();
      } else if (response.teamMemberType === "Manager") {
        addManager();
      }
    });
}

function askMenu() {
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
        askForTeamMemberType();
      } else {
        console.info("Thank you for using the Team Profile Generator!");
      }
    });
}

askMenu();
// const Team = require("./lib/team");

// // Initialize a new team member
// const team = new Team();

// // Add a new team member
// team.addTeamMember();
