

INSERT INTO department_db (id, department_name)
VALUES (1, 'Office'),
       (2, 'Software Development'),
       (3, 'Manufacturing'),
       (4, 'Warehouse');

INSERT INTO roles_db (id, title, salary, department_id)
VALUES (1, 'Manager', 150000, 2),
       (2, 'Engineer', 130000, 2),
       (3, 'Engineer', 130000, 2),
       (4, 'Intern', 20000, 2);

INSERT INTO employee_db (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Michael', 'Scott', 1, NULL),
       (2, 'Dwight', 'Shrewt', 2, 1),
       (3, 'Kelli', 'Kapur', 2, 1),
       (4, 'Jim', 'Halpert', 2, 1),
       (5, 'Pam', 'Beesley', 2, 1),
       (6, 'Kevin', 'Malone', 2, 1);