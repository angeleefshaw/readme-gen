const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');
//const { error } = require('console');

const writeFileAsync = util.promisify(fs.writeFile)

// array of questions for user
const promptUser = () => {
    inquirer.prompt([
        {
            name: "Title",
            message: "What is the title of your project?",
            type:"input",
        },{
            type:"input",
            name: "Description",
            message: "Give a short description of your project",
            
        },{
            type:"input",
            name: "Installation",
            message: "What instructions should users follow to install your application?",
            
        },{
            type:"input",
            name: "Usage",
            message: "How to use this applicaiton?",
        },{
            type:"list",
            message: "What is the license for this project?",
            name: "License",
            choices: [
                "MIT", 
                "APACHE 2.0", 
                "artistic-2.0", 
                "bsl-1.0", 
                "None"]
        },{
            type:"input",
            name: "Contributing",
            message: "How can users contribute to this project?",
        },{
            type:"input",
            name: "Tests",
            message: "Give test instructions",
        },{
            type:"input",
            name: "Questions",
            message: "Enter your github username.",
        },
        {
            type: 'input',
            name: 'LinkedIn',
            message: 'Enter your LinkedIn URL.',
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Enter your Email address',
        }
    ]).then(answers => {
        writeToFile(answers)
        console.log('Successfully wrote to README.md!')
    }).catch((err) => console.error(err));

};

const writeToFile = answers => {
    writeFileAsync('README.md', generateMarkdown(answers))
}

promptUser();






