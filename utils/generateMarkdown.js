const licenseRefArr = ['Apache License 2.0', 'BSD 3-Clause license', 'BSD 2-Clause license', 'GNU General Public License (GPL)', 'GNU Library General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'IBM Public License Version 1.0', 'Eclipse Public License version 1.0'] 
const licenseBadgeArr = ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]','[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]', '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]', '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]', '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]','[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]', '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]']
const licenseURLArr = ['(https://opensource.org/licenses/Apache-2.0)', '(https://opensource.org/licenses/BSD-3-Clause)', '(https://opensource.org/licenses/BSD-2-Clause)','(https://www.gnu.org/licenses/gpl-3.0)','(https://www.gnu.org/licenses/lgpl-3.0)', '(https://opensource.org/licenses/MIT)', '(https://opensource.org/licenses/MPL-2.0)', '(https://opensource.org/licenses/IPL-1.0)', '(https://opensource.org/licenses/EPL-1.0)']
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  let searchIndex = licenseRefArr.indexOf(license)
  console.log(searchIndex)
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
  if(license === 'None') {
    return ''
  } else {
  return `
  ## License
    
  ${license.map(license => {
    let licenseBadge = renderLicenseBadge(license)
    let licenseURL = renderLicenseLink(license)
  return `
  [${license}](${licenseURL}) ${licenseBadge}  
  `
  }) 
  .join('')} 
  `
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  const {creator, creatorGithub, collab} = data.contributers
  const {title, description, installInstrc, use, test, license} = data.content
return `
# ${title}

## Description

${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#license)
- [Questions](#questions)

## Installation

${installInstrc}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

  '''md
  ![alt text](assets/images/screenshot.png)
  '''

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

${renderLicenseSection(license)}

## Testing

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Questions

If your project has a lot of features, list them here.

`;
}

module.exports = generateMarkdown;
