// Packages needed
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Array of questions for user input and inquirer prompt
const questions = [
    {
        //Title
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log("You need to enter a project title!");
            return false;
          };
        } 
    },
    {
        //GitHub Username
        type: "input",
        name: "github",
        message: "Enter your GitHub username?",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Enter your GitHub username please!");
            return false;
          }
        }
    },
    {
        //Email address
        type: "input",
        name: "email",
        message: "Enter your email address for questions"
    },
    {
        //Description
        type: "input",
        name: "description",
        message: "Provide a description of the project",
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          };
        }
    },
    {
        //Installation
        type: "input",
        name: "installation",
        message: "What steps did you take to install your project?"
    },
    {
        //Usage 
        type: "input",
        name: "usage",
        message: "Provide information of usage"
    },
    {
        //Languages used?
        type: "checkbox",
        name: "languages",
        message: "What languages did you use for this project? (Check all that apply)",
        choices: ["Node", "HTML", "Bootstrap", "jQuery", "CSS", "JavaScript"]
      },
    {
        //Licensing information
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["None", "MIT", "Apache 2.0", "GNU"]
    },
        //Contribution
    {
        type: "input",
        name: "contribution",
        message: "List who contributed?"
    },
        //Tests
    {
        type: "input",
        name: "tests",
        message: "Describe tests?"
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    // Uses the node path module & process.cwd function to join the current working directory to the file name passed to it from the init function
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function to initialize the application
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("Your README file is now being generated. You will find the completed file in the 'dist' folder.")
       writeToFile("/dist/README.md", generateMarkdown({ ...inquirerResponses }));
    })
};

// Function call to initialize app
init();