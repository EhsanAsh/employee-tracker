// Description: Main entry point for the application
// Author: EhsanAsh
// Last Modified: 2023/10/01
// ------------------------------------------------

// Dependencies:
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const mysql = require('mysql2');
const queries = require('./lib/queries');
const util = require('util');
const fs = require('fs');
const readFromFile = util.promisify(fs.readFile);

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'EhsanAsh',
    password: 'Porsche@#911GT3',
    database: 'management_db'
  },
  // console.log(`Connected to the management_db database.`)
);

connection.connect((err) => err ? console.error(err) : console.log(`Connected to the management_db database.`));

// Main prompts:
const loadMainPrompts = () => { 

  readFromFile('./db/questions.json', 'utf8')
    .then((json) => { 
      const data = JSON.parse(json);
      const questions = data.questions;
      return inquirer.prompt(questions);
    })
    .then((answers) => {

      switch (answers.choices) {
        case 'view all departments':
          viewAllDepartments();
          break;
        case 'view all roles':
          viewAllRoles();
          break;
        case 'view all employees':
          viewAllEmployees();
          break;
        case 'add a new department':
          addDepartment();
          break;
        case 'add a new role':
          addRole();
          break;
        case 'add a new employee':
          addEmployee();
          break;
        case 'update an employee role':
          updateEmployeeRole();
          break;
        case 'exit':
          connection.end();
          break;
      };

    })
  
    .then((answers) => console.log(answers))

    .catch((err) => console.error(`Error: ${err}`));

};

// initialize the application:
const init = () => { 

  console.log(
    logo({
      name: 'Employee Management System',
      font: 'Big',
      lineChars: 10,
      padding: 2,
      margin: 3,
      borderColor: 'grey',
      logoColor: 'bold-green',
      textColor: 'green',
    })
    .render()
  );

  loadMainPrompts();

};

// Calling init to start the application:
init();