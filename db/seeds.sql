INSERT INTO department (name)
VALUES('Sales and Marketing'),
      ('Quality Management'),
      ('Production Control'),
      ('Engineering'),
      ('Research and Development'),
      ('Human Resources'),
      ('Accounting'),
      ('Legal'),
      ('IT'),
      ('Advertising'),
      ('Business Development'),
      ('Customer Service'),
      ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES('Accountant', 63000, 7),
      ('Lawyer', 100000, 8),
      ('Sales Manager', 80000, 1),
      ('Marketing Manager', 80000, 1),
      ('Quality Control Manager', 80000, 2),
      ('Accounting Manager', 92000, 7),
      ('Production Manager', 80000, 3),
      ('Engineering Manager', 80000, 4),
      ('Development Manager', 80000, 5),
      ('Human Resources Manager', 80000, 6),
      ('IT Manager', 80000, 9),
      ('Advertising Manager', 80000, 10),
      ('Business Development Manager', 80000, 11),
      ('Customer Service Manager', 80000, 12),
      ('Quality Control Representative', 45000, 2),
      ('Finance Manager', 80000, 13),
      ('Engineering Representative', 45000, 4),
      ('Development Representative', 45000, 5),
      ('Advertising Representative', 45000, 10),
      ('Customer Service Rep', 45000, 12),
      ('Finance Representative', 45000, 13);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Mike', 'Smith', 5, NULL),
      ('Jane', 'Doe', 2, NULL),
      ('Bob', 'Brown', 6, NULL),
      ('Joe', 'Black', 3, NULL),
      ('Mary', 'White', 4, NULL),
      ('Tom', 'Green', 7, NULL),
      ('Bill', 'Grey', 8, NULL),
      ('Jill', 'Pink', 9, NULL),
      ('Jack', 'Orange', 13, NULL),
      ('Jen', 'Purple', 10, NULL),
      ('Jenifer', 'Yellow', 16, NULL),
      ('Jenette', 'Blue', 14, NULL),
      ('Jenise', 'Brown', 11, NULL),
      ('Jenette', 'Orange', 12, NULL),
      ('John', 'Steel', 15, 1),
      ('Jenny', 'Red', 18, 8),
      ('Sally', 'Jones', 1, 3),
      ('Jenine', 'Green', 17, 7),
      ('Jenise', 'Pink', 19, 14),
      ('Jenifer', 'Purple', 20, 12),
      ('Jenny', 'Red', 21, 11);
