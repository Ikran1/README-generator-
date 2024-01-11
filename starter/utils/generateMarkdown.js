// function to generate markdown for README
function generateMarkdown(data) {
    const readmeContent = `
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license) 
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credit
  ${data.credit}

  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  This project is licensed under the ${data.license} license.

  ## Tests
  ${data.tests || "No specific tests provided."}


  ## Questions
  For additional questions, contact [${data.github}](https://github.com/${data.github}) or email ${data.email}.
  `;

  return readmeContent;
}

module.exports = generateMarkdown;
