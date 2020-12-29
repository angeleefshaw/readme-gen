const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const markdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [{
    type:"input",
    message: "What is the title of your project?",
    name: "Title"
},{
    type:"input",
    message: "Give a short description of your project",
    name: "Description"
},{
    type:"input",
    message: "Provide a table of contents",
    name: "Table of Contents"
},{
    type:"input",
    message: "What instructions should users follow to install your application?",
    name: "Installation"
},{
    type:"input",
    message: "How to use this applicaiton?",
    name: "Usage"
},{
    type:"list",
    message: "What is the license for this project?",
    name: "License"
    choices: ["MIT", "APACHE 2.0", "artistic-2.0", "bsl-1.0", "None"]
},{
    type:"input",
    message: "How can users contribute to this project?",
    name: "Contributing"
},{
    type:"input",
    message: "What command is needed to run tests?",
    name: "Tests"
},{
    type:"input",
    message: "What is your github username?",
    name: "Questions"
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions.message)
      .then((data) => writeFileAsync('README.md', generateHTML(data)))
      .then(() => console.log('Successfully wrote to README'))
      .catch((err) => console.error(err));

}


// function call to initialize program
init()

