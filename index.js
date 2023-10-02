// Description: Main entry point for the application
// Author: EhsanAsh
// Last Modified: 2023/10/01
// ------------------------------------------------

// Dependencies:
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const mysql = require('mysql2');
const Queries = require('./lib/queries');
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
  console.log(`Connected to the management_db database.`)
);

// Creating loadMainPrompt function to load the main prompts using 
// class Queries and defined methods for each query:
const loadMainPrompts = () => { 

  readFromFile('./db/questions.json', 'utf8')

    .then((json) => { 
      const data = JSON.parse(json);
      const questions = data.questions;
      // Adding dynamic logic to the questions, based on the user's answers:
      const modifiedQuestions = questions.map((question) => { 

        switch (question.name) { 

          case 'department':
            question.when = (answers) => answers.choices === 'add a new department';
            question.validate = (input) => typeof input === 'string' && input.length > 0 ? true : 'Please enter a valid department name.';
            break;
          
          case 'role':
            question.when = (answers) => answers.choices === 'add a new role';
            question.validate = (input) => typeof input === 'string' && input.length > 0 ? true : 'Please enter a valid role name.';
            break;
          
          case 'salary':
            question.when = (answers) => answers.choices === 'add a new role';
            question.validate = (input) => typeof (parseInt(input)) === 'number' && input > 0 ? true : 'Please enter a valid salary amount.';
            break;
          
          case 'roleDepartment':
            // creating a function to get the department names from the database:
            const getDepartments = () => {

              const query = `SELECT * FROM department`;
              return connection.promise().query(query)
                
                .then(([rows, fields]) => {
                  const departments = rows.map((row) => {
                    return { name: row.name, value: row.id };
                  });
                  return departments;
                })

                .catch(console.error);
              
            };

            question.choices = () => getDepartments();
            question.when = (answers) => answers.choices === 'add a new role';
            question.validate = (input) => typeof (parseInt(input)) === 'number' && input > 0 ? true : 'Please enter a valid department id.';           
            break;
          
          case 'firstName':
            question.when = (answers) => answers.choices === 'add a new employee';
            question.validate = (input) => typeof (input.trim().toLowerCase()) === 'string' && input.length > 0 ? true : 'Please enter a valid first name.';
            break;
          
          case 'lastName':
            question.when = (answers) => answers.choices === 'add a new employee';
            question.validate = (input) => typeof (input.trim().toLowerCase()) === 'string' && input.length > 0 ? true : 'Please enter a valid last name.';
            break;
          
          case 'employeeRole':
            const getRoles = () => { 

              const query = `SELECT * FROM role`;
              return connection.promise().query(query)

                .then(([rows, fields]) => { 
                  const roles = rows.map((row) => { 
                    return { name: row.title, value: row.id };
                  });
                  return roles;
                })
              
                .catch(console.error);
            };

            question.choices = () => getRoles();
            question.when = (answers) => answers.choices === 'add a new employee';
            question.validate = (input) => typeof (parseInt(input)) === 'number' && input > 0 ? true : 'Please enter a valid role id.';
            break;
          
          case 'employeeManager':
            const getManagers = () => { 

              const query = `SELECT * FROM employee`;
              return connection.promise().query(query)

                .then(([rows, fields]) => { 
                  const managers = rows.map((row) => { 
                    return { name: `${row.first_name} ${row.last_name}`, value: row.id };
                  });
                  return managers;
                })

                .catch(console.error);
            };

            question.choices = () => getManagers();
            question.when = (answers) => answers.choices === 'add a new employee';
            question.validate = (input) => typeof (parseInt(input)) === 'number' && input > 0 ? true : 'Please enter a valid manager id.';
            break;

        };

        return question;
      });

      return inquirer.prompt(modifiedQuestions);
    })

    .then((answers) => {

      const queries = new Queries(connection, loadMainPrompts, answers);
      switch (answers.choices) {
        case 'view all departments':
          queries.viewAllDepartments();
          break;
        case 'view all roles':
          queries.viewAllRoles();
          break;
        case 'view all employees':
          queries.viewAllEmployees();
          break;
        case 'add a new department':
          queries.addDepartment();
          break;
        case 'add a new role':
          queries.addRole();
          break;
        case 'add a new employee':
          queries.addEmployee();
          break;
        case 'update an employee role':
          queries.updateEmployeeRole();
          break;
        case 'exit':
          connection.end();
          break;
      };

    })

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