// const inquirer = require("inquirer");

function Members(list) {
  list.forEach((element) => {
    if (element.getRole() === "Manager") {
      return `<div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: ${element.name} <span id="name"></span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${element.getRole}<span id="role"></span></h6>
            <p class="card-text">ID: ${element.ID} <span id="id"></span></p>
            <a href="email.com" class="card-text"> ${element.email} <span id="email"></span></a>
            <a href class="card-text" src="github.com"> ${element.officeNumber}<span id="default"></span></a>
          </div>
        </div>
      </div>`;
    }

    if (element.getRole() === "Engineer") {
      return `<div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: ${element.name} <span id="name"></span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${element.getRole}<span id="role"></span></h6>
            <p class="card-text">ID: ${element.ID} <span id="id"></span></p>
            <a href="email.com" class="card-text"> ${element.email} <span id="email"></span></a>
            <a href class="card-text" src="github.com"> ${element.github}<span id="default"></span></a>
          </div>
        </div>
      </div>`;
    }

    if (element.getRole() === "Intern") {
      return `<div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Name: ${element.name} <span id="name"></span></h5>
            <h6 class="card-subtitle mb-2 text-muted">Role: ${element.getRole}<span id="role"></span></h6>
            <p class="card-text">ID: ${element.ID} <span id="id"></span></p>
            <a href="email.com" class="card-text"> ${element.email} <span id="email"></span></a>
            <a href class="card-text" src="github.com"> ${element.school}<span id="default"></span></a>
          </div>
        </div>
      </div>`;
    }
  });
}

// Pushed string into new array
const generateHTML = (list) => {
  const html = Members(list);
  return html;
};

// Joined array into one string
const generatePage = (html) => {
  console.log(generatePage);
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Bookish-Sniffle</title>
      <!-- Favicon -->
    <link rel="icon" href="/src/images/team image.png" type="image/x-icon">
  </head>
  <body>
    <!-- Main content -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title
              ">My Team</h2>
            </div>
          </div>
        </div>
      </div>
      ${html}
    </div>
  </body>
  </html>`;
};

// Export a function that generates the HTML
module.exports = (list) => {
  console.log(generateHTML);
  return generatePage(generateHTML(list));
};
