var inquirer = require('inquirer');
const fs = require('fs');


  function starter() {
    inquirer
  .prompt([
    {
        type: "list",
        message: "View all departments:",
        name: 'departments',
        choices: [

        ]
    }, 
    {
      type: "list",
      message: "View all roles:",
      name: 'roles',
      choices: [

      ]
    },
    {
      type: "list",
      message: "View all employees",
      name: 'employees',
      choices:[

      ]

    },
    {
      type: "list",
      message: "Add a department:",
      name: 'add-dep',
      choices: [

      ]

    },
    {
      type: "list",
      message: "Add a role:",
      name: 'add-role',
      choices: [
          
      ]
    },
    {
        type: "list",
        message: "Add an employee:",
        name: 'add-emp',
        choices: [

        ]
    },
    {
        type: "input",
        message: "Update an employee role:",
        name: 'role-update',
    },
    {
        type: "input",
        message: "What is your license (if any)?",
        name: 'license',
    },
    {
        type: "input",
        message: "Credits:",
        name: 'credits',
      }
  ]
  )
  .then((answers) => {
    console.log(answers);
    
}
)
}
starter();