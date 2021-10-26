module.exports = {

    selectionPrompt : [
    {
        type: "list",
        message: "Please choose:",
        name: 'departments',
        choices: [
            'View Employees',
            'View Employees by Department',
            'View Employees by Manager',
            'View Departments',
            'View Roles',
            'View Department',
            'Add Employee',
            'Add Department',
            'Add Role',
            'Update Employee Role',
            'Update Emplyee Manager',
            'Remove Employee',
            'Close'

        ]
    }
],
    addDepartment : [ 
    {
      type: "input",
      message: "Add a Department:",
      name: 'add-dep',
    }],

    addRole : [
    {
      type: "input",
      message: "Add a role title:",
      name: 'add-role',
    }],

    addEmployee : [
    {
        type: "input",
        message: "Add an employee first name:",
        name: 'add-emp',
    },
    {
        type: "input",
        message: "Add an employee  name:",
        name: 'add-emp',
    },


  ]
  
  // .then((answers) => {
  //   console.log(answers);
    
}

