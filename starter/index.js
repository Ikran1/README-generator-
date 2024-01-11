const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is it used?',
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Did you collaborate with anyone? if so link their gitHub page',
    },
    {
        type: "list",
        name: "license",
        message: "From the list below, choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
    }, 
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },



];

// function to write README file
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    fs.writeFileSync(fileName, readmeContent);
    console.log("README.md generated successfully!");
  }
  
  // function to initialize program
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        writeToFile("README.md", answers);
      })
      .catch((err) => console.error(err));
  }
  
  // function call to initialize program
  init();
  