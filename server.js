const express = require("express");

//make sure you require path lol
const path = require('path');

const mysql = require("mysql2");
var app = express();
var PORT = 3008;


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

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
//Routes
  app.get('/api/company', (req, res) => {
      
      res.send('great success');
  });
//Root route
  app.get('/', (req, res) => {
      res.send('welcome!')
  });
//Queries go inside above routes

app.post('/api/company', (req, res) => {
    console.log('this was posted')
});

// Query database
db.query('SELECT * FROM department_db', function (err, results) {
    console.log(results);
    console.log("*********");
  });
  
  db.query('SELECT * roles_db', function (err, results) {
    console.log(results);
    console.log("*********");
  });
  
  db.query('SELECT * employee_db', function (err, results) {
    console.log(results);
    console.log("*********");
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`It is running on ${PORT}`)
});