// function to generate markdown for README
function generateMarkdown(answers) {
  return  `
  ## Title
  ${answers.Title}

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0
  [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

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
  ${answers.Questions}
  ${answers.LinkedIn}
  ${answers.Email}
  
`;
}

module.exports = {generateMarkdown};
