// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Description 
  ${data.Description}
  #Table of Conntents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#license)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [Questions](#Questions)
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}

`;
}

module.exports = {generateMarkdown};
