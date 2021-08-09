const inquirer = require('inquirer');
const fs = require ('fs');
const generatePage = require ('./src/generatePage');


// TODO: Include packages needed for this application

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: `Enter the team member's name.`,
        validate: personName => {
            if (personName){
                return true;
            } else {
                console.log(`Please provide the team member's name!`);
          }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which license would you like to use?',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'number',
        name: 'id',
        message: `Enter the team member's id number.`,
        validate: personId => {
            if (personId){
                return true;
            } else {
                console.log(`Please provide the team member's id number!`);
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the team member's email address.`,
        validate: personEmail => {
            if (personEmail){
                return true;
            } else {
                console.log(`Please provide the team member's email address!`);
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Enter the team member's school.`,
        when: ({role}) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: `Enter the team member's office number.`,
        when: ({role}) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Enter the team member's github username.`,
        when: ({role}) => {
            if ( role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
