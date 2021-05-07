const express = require('express');
const inquirer = require("inquirer");
const mysql = require('mysql2/promise');
const db = require('./db/connection');
const cTable = require('console.table');

const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  app.listen(PORT, () => {});
});

// Start the prompt functions
function startPrompt() {
    inquirer.prompt({
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role', 'Update An Employee Manager', 'Delete Departments', 'Delete Roles', 'Delete Employees'], 

    }).then( answer => {
        switch (answer.menu) {
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add A Role':
                addRole();
                break;
            case 'Add An Employee':
                addEmployee();
                break;
            case 'Update An Employee Role':
                updateEmployeeRole();
                break;
            case 'Update An Employee Manager':
                updateEmployeeManager();
                break;
            case 'Delete Department':
                deleteDepartment();
                break;
            case 'Delete Role':
                deleteRole();
                break;
            case 'Delete Employee':
                deleteEmployee();
                break;
        }
    })
 };

//
function viewAllDepartments() {
    const sql = `SELECT * FROM department;`
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return;
        }
        console.table(result);
        startPrompt();
    });
};

//
function viewAllRoles() {

};

//
function viewAllEmployees() {

};

//
function addDepartment() {

};

//
function addRole() {

};

//
function addEmployee() {

};

//
function updateEmployeeRole() {

};

//
function updateEmployeeManager() {

};

//
function deleteDepartment() {

};

//
function deleteRole() {

};

//
function deleteEmployee() {
    
};

// Call to start app
startPrompt();