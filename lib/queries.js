// Creating an object using class syntax that will
// contain all the queries needed to run on the database.
//----------------------------------------------------------
// Importing console.table package to display the data
// in a table format.
const cTable = require('console.table');
//----------------------------------------------------------
class Queries { 

  constructor(connection, loadMainPrompts, answers) { 
    if(!connection) {
      throw new Error('You must pass a connection to the constructor of the Queries class.');
    };
    this.connection = connection;
    this.loadMainPrompts = loadMainPrompts;
    this.answers = answers;
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

  viewAllEmployees() { 

    const { connection, loadMainPrompts } = this;
    // the query below is joining the employee table with the role table:
    const query = `SELECT employee.id, CONCAT(employee.first_name, ' ', employee.last_name) AS name, role.title, role.salary, department.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id`;

    connection.promise().query(query)
      .then(([rows, fields]) => console.table(rows))
      .catch(console.error)
      .then(() => loadMainPrompts());

  };

  addDepartment() { 

    const { connection, loadMainPrompts } = this;
    const { department } = this.answers;
    const data = { name: department };
    const query = `INSERT INTO department SET ?`;

    connection.promise().query(query, data)
      .then(([rows, fields]) => console.log(`Added department ${this.answers.department}.`))
      .catch(console.error)
      .then(() => loadMainPrompts());

  };

  // the addRole() method is using the answers object to get the role, salary, and department(through the roleDepartment property) values.
  addRole() { 

    const { connection, loadMainPrompts } = this;
    const { role, salary, roleDepartment } = this.answers;
    const data = { title: role, salary: salary, department_id: roleDepartment };
    const query = `INSERT INTO role SET ?`;

    connection.promise().query(query, data)
      .then(([rows, fields]) => console.log(`Added role ${this.answers.role}.`))
      .catch(console.error)
      .then(() => loadMainPrompts());
    
  };

  addEmployee() { 

    const { connection, loadMainPrompts } = this;
    const { firstName, lastName, employeeRole, employeeManager } = this.answers;
    const data = { first_name: firstName, last_name: lastName, role_id: employeeRole, manager_id: employeeManager };
    const query = `INSERT INTO employee SET ?`;

    connection.promise().query(query, data)
      .then(([rows, fields]) => console.log(`Added employee ${this.answers.firstName} ${this.answers.lastName}.`))
      .catch(console.error)
      .then(() => loadMainPrompts());

  };

};

module.exports = Queries;