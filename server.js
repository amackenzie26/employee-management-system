
const inquirer = require('inquirer');
const prompts = require('./index');

const cTable = require('console.table');
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );

function makeSelection() {
    inquirer
        .prompt(prompts.selectionPrompt)
        .then((response) => {
            let selection = response.selection;
            if (selection === 'View Employees') {
                viewEmployees();
            }
            else if (selection === 'View Employees by Department') {
                viewEmpByDepartment();
            }
            else if (selection === 'View Employees by Manager') {
                viewEmpByManager();
            }
            else if (selection === 'View Departments') {
                viewDepartments();
            }
            else if (selection === 'View Roles') {
                viewRoles();
            }
            else if (selection === 'View Department') {
                viewDepartment();
            }
            else if (selection === 'Add Employee') {
                addEmployee();
            }
            else if (selection === 'Add Department') {
                addDepartment();
            }
            else if (seleciton === 'Add Role') {
                addRole();
            }
            else if (selection === 'Update Employee Role') {
                updateRole();
            }
            else if (selection === 'Update Employee Manager') {
                updateEmpManager();
            }
            else if (selection === 'Remove Employee') {
                removeEmployee();
            }
            else if (selection === 'Close') {
                close();
            }
        }
    )}

// Query database
function viewEmployees() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function viewEmpByManager() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function viewDepartments() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function viewRoles() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function viewDepartment() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function addEmployee() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function addDepartment() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function addRole() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function updateEmpManager() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function removeEmployee() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
function close() {
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    };
 
makeSelection();
