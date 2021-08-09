const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const Manager = require("../lib/Manager")
// Create cards for each role

// Manager Card

//  Employee Card

// Intern Card

// Engineer Card


// function to generate html file
function generatePage(data) {
  return `

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Teams</title>
  </head>
  <body>
      
  </body>
  </html>

`;
}

module.exports = generatePage;