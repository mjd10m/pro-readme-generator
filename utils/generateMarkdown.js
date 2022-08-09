const licenseRefArr = ['Apache License 2.0', 'BSD 3-Clause license', 'BSD 2-Clause license', 'GNU General Public License (GPL)', 'GNU Library General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'Eclipse Public License version 1.0'] 
const licenseBadgeArr = ['![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)','![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)', '![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)', '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)', '![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)', '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)', '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)','![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)', '![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)']
const licenseURLArr = ['(https://opensource.org/licenses/Apache-2.0)', '(https://opensource.org/licenses/BSD-3-Clause)', '(https://opensource.org/licenses/BSD-2-Clause)','(https://www.gnu.org/licenses/gpl-3.0)','(https://www.gnu.org/licenses/lgpl-3.0)', '(https://opensource.org/licenses/MIT)', '(https://opensource.org/licenses/MPL-2.0)', '(https://opensource.org/licenses/IPL-1.0)', '(https://opensource.org/licenses/EPL-1.0)']
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let searchIndex = licenseRefArr.indexOf(license)
  let badge = licenseBadgeArr[searchIndex]
  return badge 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let searchIndex = licenseRefArr.indexOf(license)
  let url = licenseURLArr[searchIndex]
  return url 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let noneSelected = license.indexOf('None')
  if(noneSelected != -1 || license.length === 0) {
return `## License
No license was used in this project.`
  } else {
return `## License  
${license.map(license => {
  let licenseBadge = renderLicenseBadge(license)
  let licenseURL = renderLicenseLink(license)
return `[${license}]${licenseURL} ${licenseBadge}  `
}) 
.join('\r\n')}`
}
}

function addtlCollaborator(collabArr, creator, creatorGithub) {
  if(collabArr === undefined) {
return `${creator} [GitHub](https://github.com/${creatorGithub})`
  } else {
return `${creator} [GitHub](https://github.com/${creatorGithub})
${collabArr.map(collaborator => {
return `${collaborator.collabName} [GitHub](https://github.com/${collaborator.collabGithub})  `
  })
  .join('\r\n')}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {creator, creatorGithub, creatorEmail, collab} = data.contributers
  const {title, description, installInstrc, use, test, license} = data.content
return `
# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#license)
- [Questions](#questions)

## Installation
${installInstrc}

## Usage
${use}

## Testing
${test}

## Credits
${addtlCollaborator(collab, creator, creatorGithub)}

${renderLicenseSection(license)}

## Questions
If you have any further questions you can contact ${creator} at ${creatorEmail} or visit their [GitHub Page!](https://github.com/${creatorGithub})

`;
}

module.exports = generateMarkdown;
