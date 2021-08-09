const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")

// Create cards for each role

// Manager Card
function generateManagerCard(data){
  return `
  <div class="card">
    <div class="card border-primary mb-3" style="max-width: 18rem">
      <h5 class="card-header">${data.name}</h5>
      <div class="card-body text-primary">
        <h5 class="card-title">Manager</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">${data.officeNumber}</li>
        </ul>
      </div>
  </div>
  
  `
}
//  Employee Card
function generateEmployeeCard(data){
  return `
  <div class="card">
    <div class="card border-danger mb-3" style="max-width: 18rem">
      <h5 class="card-header">${data.name}</h5>
      <div class="card-body text-danger">
        <h5 class="card-title">Employee</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">Office: ${data.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
  
  `
}
// Intern Card
function generateInternCard(data){
  return `
  <div class="card">
    <div class="card border-info mb-3" style="max-width: 18rem">
      <h5 class="card-header">${data.name}</h5>
      <div class="card-body text-info">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">School: ${data.school}</li>
        </ul>
      </div>
    </div>
  </div>
  
  `
}
// Engineer Card
function generateEngineerCard(data){
  return `
  <div class="card">
    <div class="card border-success mb-3" style="max-width: 18rem">
      <h5 class="card-header">${data.name}</h5>
      <div class="card-body text-success">
        <h5 class="card-title">Engineer</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.id}</li>
          <li class="list-group-item">Email: ${data.email}</li>
          <li class="list-group-item">${data.github}</li>
        </ul>
      </div>
    </div>
  </div>

`
}

// stack of cards
function generateCards(data) {
  switch (employee.getRole()){
    case "Manager":
      cards.manager.push(generateManagerCard())
      break;
    case "Engineer":
      cards.engineer.push(generateEngineerCard())
      break;
    case "Intern":
      cards.intern.push(generateEngineerCard())
      break;
    case "Employee":
      cards.intern.push(generateInternCard())
      break;
    }
    return cards;

}

// function to generate html file
function generatePage(data) {
  return `

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
      <title>Teams</title>
    </head>
    <body>
      <header>
        <style>
          h1 {
            text-align: center;
          }
        </style>
        <h1>The Team</h1>
      </header>
      <div class="card-deck">
          ${cards}
      </div>
    </body>
  </html>
  

`;
}

module.exports = generatePage;