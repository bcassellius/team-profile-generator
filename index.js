const inquirer = require('inquirer');
const fs = require ('fs');
const generatePage = require ('./src/generatePage');

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
        message: 'Which role does this person have?',
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

// a function to write team file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', generatePage(fileContent), err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'A team has been created. Find it in the dist folder!'
        });
      });
    });
  };
  
  // initialize app
  function init() {
    inquirer.prompt(questions)
    .then(inquirerResponses => {
      writeFile(inquirerResponses);
      console.log(`Your team has been created in the dist folder!`);
    }
  )}; 
  
  init()
