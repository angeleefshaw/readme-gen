// function to generate markdown for README
function generateMarkdown(answers) {
  return  `
  ## ${answers.title}

  ## Description 
  ${answers.Description}
  
  ## Table of Conntents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  
  ## Installation
  ${answers.Installation}

  ## Usage
  ${answers.Usage}

  ## License
  ${answers.License}

  ## Contributing
  ${answers.Contributing}

  ## Tests
  ${answers.Tests}

  ## Questions
  ${answers.Github}
  ${answers.LinkedIn}
  ${answers.Email}
  
`;
}

module.exports = {generateMarkdown};
