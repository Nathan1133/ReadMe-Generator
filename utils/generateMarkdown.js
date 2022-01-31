// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License badge
  return `![GitHub license](https://img.shields.io/badge/license-${license}-ff69b4.svg)`;
}

// Function that returns the license link

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, return the license link
  return `\n* [License](#license)\n`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  // Function that returns the license section of README

function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License section in the ReadMe
  return `
  
# ${data.title} ${renderLicenseBadge(data.license)}
### Table of Contents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed](#deployed)
- [Languages](#languages)
- [Screenshot](#screenshot)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
${data.description}
## Installation
\`\`\`
${data.installation}
\`\`\`
## Usage
${data.usage}
## Deployed application link
${data.deployed}
## Languages/Technology Used
${data.languages}
## Screenshot
!(${data.screenshot}?raw=true)
${renderLicenseSection(data.license)}
  
## Contributing
${data.contributing}
## Tests
\`\`\`
${data.test}
\`\`\`
## Questions?
  This project is licensed under the ${license} license.`;
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;