DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

DROP TABLE IF EXISTS department_db;
CREATE TABLE department_db (
    id INT NOT NULL,
    department_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS roles_db;
CREATE TABLE roles_db (
    id INT PRIMARY KEY,
    title TEXT,
    salary DECIMAL,
    FOREIGN KEY department_id NOT NULL,
    REFERENCES department_db,
    ON DELETE SET NULL
);

DROP TABLE IF EXISTS employee_db;
CREATE TABLE employee_db (
    id IN PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    FOREIGN KEY role_id NOT NULL,
    REFERENCES roles_db,
    manager_id INT NOT NULL,
)