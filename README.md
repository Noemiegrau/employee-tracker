# **_Employee Tracker_**

## **_Table of contents_**
* [Description of the project](#description-of-the-project)
* [Technologies used](#technologies-used)
* [Usage](#usage)
* [Installation](#installation)
* [Link URL to GitHub Repository](#link-URL-to-GitHub-repository)

## **_Description of the project_**
This project is an employee tracker, CRUD application, using Nodejs. Questions are prompted in the CLI and the user's answers will modify the database.

## **_Technologies used_**
Project is created using:
* JavaScript
* Nodejs
* Expressjs
* MySQL database
* MySQL2
* console.table

## **_Usage_**
Final app should look something like this:
https://user-images.githubusercontent.com/78329298/117609685-4bdaeb80-b115-11eb-8af5-735c097ba573.mov

## **_Installation_**
Here are some guidelines for installing the project on your local machine in order to be able to try it: 

1. Make sure to have mysql server downloaded and running.

2. Since Node.js applications don't have a front end, clone or download the repository to your own local machine and run it from your command line.

3. Then, make sure that your repo includes a package.json with the required dependencies. You can create one by running ```npm init``` in your command line.

4. Run ```npm i``` or ```npm install``` in order to download all the dependencies.

5. Here are the MySQL instructions to create your tables:

- Enter ```mysql -u root -p``` in the CLI to enter mysql.
- Enter your mysql password (it is the same as the one in the db/connection.js file). 
- Create your database by entering ```CREATE DATABASE employees;``` and enter.
- Make sure it was created successfully by entering ```SHOW databases;```.
- Tell your database to use the employees database by entering ```USE employees;```.
- Tell your database to use your db and schema files by entering ```source db/db.sql;``` and enter, then type ```source db/schema.sql;``` and enter.
- Exit MySQL by entering ```quit;```.
- Your are done!

6. Run ```node server.js``` or ```npm start``` in your terminal to launch the application.

7. Enjoy and don't hesitate to contribute! 🙂

## **_Link URL to GitHub Repository_**
https://github.com/Noemiegrau/employee-tracker

