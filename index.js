// TODO: Include packages needed for this application

//Imported required packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
// Array of questions for user input and inquirer prompt
const promptUser = () => {
    return inquirer.prompt([
    {
        // Title of the project
        type: "input",
        name: "title",
        message: "What is the title of your project? ",
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log("You must enter a title!");
            return false;
          };
        } 
    },
    {
        // User's GitHub Name
        type: "input",
        name: "github",
        message: "Enter your GitHub username?",
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log("Enter GitHub username please!");
            return false;
          }
        }
    },
    {
        // User's email address
        type: "input",
        name: "email",
        message: "Enter your email address where you can be reached for questions"
    },
    {
        // Deployed application link
        type: "input",
        name: "projectLink",
        message: "Enter the deployed application link"
    },
    
    {
        // Description of the project
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          };
        }
    },
    {
        // Installation information
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        // Usage information
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        // What coding languages did you use?
        type: "checkbox",
        name: "languages",
        message: "What languages did you use for this project? (Check all that apply)",
        choices: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", "Node"]
      },
    {
        // Licensing information
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["None", "MIT", "Apache 2.0", "GNU"]
    },
    {
        // Contributing information
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to this project, add guidelines for how to do so."
    },
    {
        // Tests
        type: "input",
        name: "tests",
        message: "If you wrote tests for your application, explain how to run them. If not, enter 'N/A'"
    },

])
.catch(err => {
    console.log(err);
  })};

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/README.md", fileName, data, err => {
        if (err) {
          reject(err);
          return;

// TODO: Create a function to initialize app
function init() {
    promptUser().then(inquirerResponses => {
        writeToFile("./dist/README.md", generateMarkdown({ ...inquirerResponses }));
     })

}

// Function call to initialize app
init();
