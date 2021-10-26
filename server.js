
const inquirer = require('inquirer');
const prompts = require('./index');

const cTable = require('console.table');
const mysql = require("mysql2");
const { selectionPrompt } = require('./index');
const { prompt } = require('inquirer');
const { type } = require('os');

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
            else if (selection === 'Add Role') {
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
        )
}

//Query database
function viewEmployees() {
    db.promise().query(`SELECT * FROM employee_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
};
function viewEmpByManager() {
    db.promise().query(`SELECT * FROM manager_id;`)
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
    db.promise().query(`SELECT * FROM roles_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
};
function viewDepartment() {
    db.promise().query(`SELECT * FROM department_id;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
};
function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the new employee ID number?',
        name: 'newEmployeeIdNumber'
    },
    {
        type: 'input',
        message: 'What is the new employees first name?',
        name: 'newEmployeeFirstName'
    },
    {
        type: 'input',
        message: 'What is the new employees last name?',
        name: 'newEmployeeLastName'
    },
    {
        type: 'input',
        message: 'What is the new employees role ID number?',
        name: 'newEmployeeRole'
    },
    {
        type: 'input',
        message: 'What is the new employees manager ID?',
        name: 'newEmployeeManager'
    },
    ])
    .then((response) => {
        console.log(response)
        let newEmpId = response.newEmployeeIdNumber
        let newFn = response.newEmployeeFirstName
        let newLn = response.newEmployeeLastName
        let newEmpRole = response.newEmployeeRole
        let newEmpMan = response.newEmployeemanager
    db.promise().query(`INSERT INTO employee_db (id, first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?, ?)`, [newEmpId, newFn, newLn, newEmpRole, newEmpMan])
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    })
};
function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the new department name?',
        name: 'newDepartmentName'
    },
])
    .then((response) => {
        console.log(response)
        let res = response.newDepartmentName
    db.promise().query(`INSERT INTO department_db (department_name) VALUES (?)`, [res])
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    })
};
function addRole() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the new role title?',
        name: 'newRoleTitle'
    },
    {
        type: 'input',
        message: 'What is the new role salary?',
        name: 'newRoleSalary'
    },
    {    
        type: 'input',
        message: 'What is the new role department ID number?',
        name: 'newRoleIdNumber'
    },
])
    .then((response) => {
        console.log(response)
        let newTitle = response.newRoleTitle
        let newSalary = response.newRoleSalary
        let newIdNum = response.newRoleIdNumber
    db.promise().query(`INSERT INTO roles_db (title, salary, department_id) VALUES (?, ?, ?)`, [newTitle, newSalary, newIdNum])
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    })
};
function updateEmpRole() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the updated role ID?',
        name: 'empRoleUpdateId'
    },
    {
        type: 'input',
        message: 'What is the updated role name?',
        name: 'empRoleUpdate'
    },
])
    .then((response) => {
        let empRoleID = response.empRoleUpdateId
        let empRoleUp = response.empRoleUpdate
        console.log(response)
    db.promise().query(`INSERT INTO roles_db (role_id, title) VALUES (?, ?)`, [empRoleID, empRoleUp])
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
    })
};
function updateEmpManager() {
    inquirer.prompt([{
        type: 'input',
        message: 'What what manager would you like to change this employee to?',
        name: 'newRoleIdNumber'
    },
])
    .then((response) => {
        console.log(response)
    db.promise().query(`SELECT * FROM department_db;`)
        .then((results) => {
            console.table(results[0]);
        })
        .catch(console.error)
        .then(() => {
            makeSelection();
        })
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

