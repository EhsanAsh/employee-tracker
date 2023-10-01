// Creating an object using class syntax that will
// contain all the queries needed to run on the database.
//----------------------------------------------------------
// Importing console.table package to display the data
// in a table format.
const cTable = require('console.table');
//----------------------------------------------------------
class Queries { 

  constructor(connection, loadMainPrompts) { 
    if(!connection) {
      throw new Error('You must pass a connection to the constructor of the Queries class.');
    };
    this.connection = connection;
    this.loadMainPrompts = loadMainPrompts;
  };

  viewAllDepartments() { 

    const { connection } = this;
    const query = `SELECT * FROM department`;

    connection.promise().query(query)
      .then(([rows, fields]) => console.table(rows))
      .catch(console.error)
      .then(() => this.loadMainPrompts());

  };

  viewAllRoles() { 

    const { connection, loadMainPrompts } = this;
    const query = `SELECT * FROM role`;

    connection.promise().query(query)
      .then(([rows, fields]) => console.table(rows))
      .catch(console.error)
      .then(() => loadMainPrompts());

  };

};

module.exports = Queries;