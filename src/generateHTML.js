const inquirer = require('inquirer');
const { writeFile} = require("fs").promises;
// import fs from "fs";

// Import classes
import Engineer from "./lib/engineer.js";
import Intern from "./lib/intern.js";
import Manager from "./lib/manager.js";
import Employee from "./lib/employee.js";


// Import HTML template
const teamMembers = [];
const employees = [name, id, email];

const generateHTML = require({ ...employees,  }) =>
 `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <title>Bookish-Sniffle</title>
   <!-- Favicon -->
  <link rel="icon" href="/src/images/team image.png" type="image/x-icon">
</head>
<body>
  <!-- Main content -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Team of Software Engineers</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="text-center">Team Members</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: ${name} <span id="name"></span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${teamMemberType} <span id="role"></span></h6>
            <p class="card-text">ID: ${id} <span id="id"></span></p>
            <p class="card-text">Email: ${email} <span id="email"></span></p>
            <p class="card-text`>${teamMemberType}<span id=`default"></span></p>
          </div>
        </div>
      </div>
    </div>
  <!-- Bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  <script type="module" src="index.js"></script>
</body>
</html>`;

const init()  => {
  promptUser()
    .then((answers) => writeFile("generatedHTML.html", generateHTML(answers)))
    .then(() => console.log("Successfully wrote to generatedHTML.html"))
    .catch((err) => console.error(err));
};

init();



