const inquirer = require('inquirer');
const {writeFile} = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

//const writeFileAsync = util.promisify(fs.writeFile)

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
            name: "Table of Contents",
            message: "Provide a table of contents",
            
        },{
            type:"input",
            name: "Installation",
            message: "What instructions should users follow to install your application?",
            
        },{
            type:"input",
            message: "How to use this applicaiton?",
            name: "Usage"
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
        },
    ])

};

    
promptUser().then((answers) => {
    writeFile('README.txt', generateMarkdown(answers));
    console.log('Successfully wrote to README')
})
.catch((err) => console.error(err));









