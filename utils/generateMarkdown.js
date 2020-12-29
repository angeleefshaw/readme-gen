// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #Description 
  ${data.Description}
  #Table of Conntents

`;
}

module.exports = generateMarkdown;
