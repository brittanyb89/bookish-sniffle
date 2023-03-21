const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const generateHTML = require("./src/generateHTML.js");
const { writeFile } = require("fs").promises;

const listMembers = [];

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

function askForTeamMemberType() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamMemberType",
        message: "Select a team memeber type:",
        choices: ["Engineer", "Intern"],
      },
    ])
    // If user selects Engineer, add a new engineer
    // If user selects Intern, add a new intern
    .then((response) => {
      if (response.teamMemberType === "Engineer") {
        addEngineer();
      } else if (response.teamMemberType === "Intern") {
        addIntern();
      }
    });
}

function askMenu() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "newMember",
        message: "Would you like to build your team?",
      },
    ])
    // If user selects yes, add a new team member
    // If user selects no, end the application with a thank you message
    .then((response) => {
      if (response.newMember) {
        askForTeamMemberType();
      } else if (!response.newMember) {
        writeFile("index.html", generateHTML(listMembers), (err) => {
          if (err) {
            console.log(err);
          }

          console.log("Success!");
        });
      }
    });
}

function init() {
  addManager();
}

init();

// initial prompt to add manager
// module.exports.addManager = addManager;
// addManager();

// export listMembers
module.exports.listMembers = listMembers;
