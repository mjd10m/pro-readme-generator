// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === '') {
    return ''
  } else {
    let licenseBadge = renderLicenseBadge(license)
    let licenseURL = renderLicenseLink(license)
    return `
    ## License
    ${license} 
    `
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {creator, creatorGithub, collab} = data.contributers
  const {title, description, installinstrc, use, test, license} = data.content
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

  ${installinstrc}

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

  ## License

  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

  ---

  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

  ## Testing

  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

  ## Questions

  If your project has a lot of features, list them here.

`;
}

module.exports = generateMarkdown;
