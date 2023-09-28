![Ehsan@sh](./Favicon.ico)

# User Story

>AS A business owner,
>*I WANT* to be able to view and manage the departments, roles, and employees in my company,
>*SO THAT* I can organize and plan my business.

---

# Acceptance Criteria

### GIVEN a command-line application that accepts user input,
- *WHEN I* start the application,
  *THEN I* am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
- *WHEN I* choose to view all departments,
  *THEN I* am presented with a formatted table showing department names and department ids.
- *WHEN I* choose to view all roles,
  *THEN I* am presented with the job title, role id, the department that role belongs to, and the salary for that role.
- *WHEN I* choose to view all employees,
  *THEN I* am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- *WHEN I* choose to add a department,
  *THEN I* am prompted to enter the name of the department and that department is added to the database.
- *WHEN I* choose to add a role,
  *THEN I* am prompted to enter the name, salary, and department for the role and that role is added to the database.
- *WHEN I* choose to add an employee,
  *THEN I* am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
- *WHEN I* choose to update an employee role,
  *THEN I* am prompted to select an employee to update and their new role and this information is updated in the database.

---

# Algorithm:

> 1. Start the command-line application.
> 2. Display the main menu with options:
>  - View all departments
>  - View all roles
>  - View all employees
>  - Add a department
>  - Add a role
>  - Add an employee
>  - Update an employee role
> 3. Capture user selection and navigate to respective function.
> 4. For each “View” option, retrieve and display formatted data from the database.
> 5. For each “Add” option, prompt user for necessary input and insert data into the database.
> 6. For “Update an employee role”, prompt user to select an employee and their new role, then update the database accordingly.

--- 

## Tasks:

### Development Phase:

- Set up the command-line application environment.
- Implement the main menu interface with the given options.
- Develop functions for each option to interact with the database.
- Implement data retrieval and formatting functions for "View" options.
- Implement data insertion functions for "Add" options, with user prompts for necessary data.
- Implement data updating function for "Update an employee role" with user prompts for selection and new role.

### Testing Phase:

- Test the application to ensure it starts successfully and displays the main menu.
- Test each "View" option to ensure accurate and formatted data display.
- Test each "Add" option to ensure proper data insertion with user input.
- Test "Update an employee role" to ensure it accurately updates the database with user selection and input.

### Deployment Phase:

- Document the process for starting and using the application.
- Implement error handling and logging for user input and database interaction issues.
- Optimize the application for various command-line environments and deploy for user access.

---

## Pattern Recognition:

> The workflow represents a typical command-line CRUD (Create, Read, Update, Delete) application, focusing on database interaction and user input handling. The application serves as a simple but effective business management tool, providing essential functionalities for the owner to organize and plan business operations.

---

## PseudoCode:

`Initialize Application()
  DisplayMainMenu()
    UserSelection = CaptureUserInput()
    SWITCH UserSelection
      CASE 'View all departments'
        RetrieveAndDisplayDepartments()
      CASE 'View all roles'
        RetrieveAndDisplayRoles()
      CASE 'View all employees'
        RetrieveAndDisplayEmployees()
      CASE 'Add a department'
        PromptAndAddDepartment()
      CASE 'Add a role'
        PromptAndAddRole()
      CASE 'Add an employee'
        PromptAndAddEmployee()
      CASE 'Update an employee role'
        PromptAndUpdateEmployeeRole()
FUNCTION RetrieveAndDisplayDepartments()
  // Retrieve department data from database
  // Format and display data
FUNCTION RetrieveAndDisplayRoles()
  // Retrieve role data from database
  // Format and display data
FUNCTION RetrieveAndDisplayEmployees()
  // Retrieve employee data from database
  // Format and display data
FUNCTION PromptAndAddDepartment()
  // Prompt user for department name
  // Insert new department into database
FUNCTION PromptAndAddRole()
  // Prompt user for role name, salary, and department
  // Insert new role into database
FUNCTION PromptAndAddEmployee()
  // Prompt user for employee first name, last name, role, and manager
  // Insert new employee into database
FUNCTION PromptAndUpdateEmployeeRole()
  // Prompt user to select an employee
  // Prompt user for new role
  // Update employee role in database`