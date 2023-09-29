// Description: Main entry point for the application
// Author: EhsanAsh
// Last Modified: 2023/10/01
// ------------------------------------------------

// Dependencies:
const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const mysql = require('mysql2');
const queries = require('./lib/queries');
const fs = require('fs');
const { readFile } = require('fs/promises');
const util = require('util');
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

};
