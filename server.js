
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
        message: 'What is the new employees role?',
        name: 'newEmployeeRole'
    },
    {
        type: 'input',
        message: 'What is the new employees manager?',
        name: 'newEmployeeManager'
    },
    ])
    .then(() => {
    db.promise().query(`SELECT * FROM employee_db;`)
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
    .then(() => {
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
        message: 'What is the new role department?',
        name: 'newRoleIdNumber'
    },
])
    .then(() => {
    db.promise().query(`SELECT * FROM roles_db;`)
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
        name: 'empRoleUpdate'
    },
    {
        type: 'input',
        message: 'What is the updated role name?',
        name: 'empRoleUpdate'
    },
])
    .then(() => {
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
function updateEmpManager() {
    inquirer.prompt([{
        type: 'input',
        message: 'What what manager would you like to change this employee to?',
        name: 'newRoleIdNumber'
    },
])
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

