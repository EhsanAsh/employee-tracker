const inquirer = require('inquirer');
const fs = require('fs');
const logo = require('asciiart-logo');
const mysql = require('mysql2');
const queries = require('./lib/queries');

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'EhsanAsh',
    password: 'Porsche@#911GT3',
    database: 'management_db'
  },
  console.log(`Connected to the management_db database.`)
);