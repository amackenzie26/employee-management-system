DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department_db;
CREATE TABLE department_db (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS roles_db;
CREATE TABLE roles_db (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    FOREIGN KEY department_id NOT NULL,
    REFERENCES department_db(id),
    ON DELETE SET NULL
    PRIMARY KEY(id)
);

DROP TABLE IF EXISTS employee_db;
CREATE TABLE employee_db (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    FOREIGN KEY role_id INT NOT NULL,
    manager_id INT NOT NULL,
    REFERENCES roles_db,
    
);

SELECT * FROM department_db;

SELECT * FROM roles_db;

SELECT * FROM employee_db;