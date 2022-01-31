// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License badge
  return `![GitHub license](https://img.shields.io/badge/license-${license}-ff69b4.svg)`;
}


// Function that returns the license section of README

function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License section in the ReadMe
  return `## License
  This App is licensed under ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}  <br />
${renderLicenseBadge(data.license)} <br />
## Table of Contents 


- [Description](#description)
- [Installation](#installation)
- [Languages](#languages)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
<br />
<br />


## Description

${data.description} <br />


## Installation


${data.installation}


<br />

## Usage

${data.usage} <br />
## Languages/Technology Used

${data.languages} <br />

${renderLicenseSection(data.license)} <br />
  
## Contribution
${data.contribution} <br />
## Tests
${data.tests} <br />
## Questions?
If you have any questions about the project, contact me at: 
${data.email} <br />
Check out the rest of my work at: 
[${data.github}](https://github.com/${
    data.github
  }
  /) <br />
`;
}

module.exports = generateMarkdown;