// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const creatorQuestions = [
    {
        type: 'input',
        name: 'creator',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter your name!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'creatorGithub',
        message: 'Enter your GitHub Username',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter your GitHub UserName!');
                return false
            }
        }
    },
    {
        type: 'confirm',
            name: 'confirmAddCollabQuestions',
            message: 'Would you like to add any collaborators other than yourself?',
            default: false
    }
];

const collaboratorQuestions = [
    {
        type: 'input',
        name: 'collabName',
        message: "What is your collaborator's name? (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log("Please enter collaborator's name!");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'collabGithub',
        message: "Enter your collaborator's GitHub Username",
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log("Please enter collaborator's GitHub UserName!");
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddCollab',
        message: 'Would you like to add additional collaborators?',
        default: false
    }
];

const readmeContentQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter the project title!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the project descriptiopn. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter your project description!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installInstrc',
        message: 'Enter the project installation instructions. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter the project installation instructions!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'use',
        message: 'Enter the intended use of the project. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true
            } else {
                console.log('Please enter the project installation instructions!');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: "Enter any project testing.",
    },
    {
        type: 'checkbox',
        name: 'license',
        message: "What license's were used in this project? (Check all that apply)",
        choices: ['Apache License 2.0', 'BSD 3-Clause license', 'BSD 2-Clause license', 'GNU General Public License (GPL)', 'GNU Library General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0', 'None']
    }
]

function collaboratorData(readmeData) {
    if(!readmeData.collab) {
        readmeData.collab = [];
    }
    return inquirer.prompt(collaboratorQuestions)
    .then(collabData => {
        readmeData.collab.push(collabData)
        if (collabData.confirmAddCollab) {
            return collaboratorData(readmeData)
        } else {
            return readmeData;
        }
    });
}
async function readmeContentData (readmeData) {
    let readmeContentData = await inquirer.prompt(readmeContentQuestions)
    let readmeDataObj = {}
    readmeDataObj.contributers = readmeData
    readmeDataObj.content = readmeContentData
    return readmeDataObj
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(creatorQuestions)
    .then(readmeData =>{
        if(readmeData.confirmAddCollabQuestions) {
            return collaboratorData(readmeData)
        } else {
            return readmeData
        }
    })
    .then(readmeData => readmeContentData(readmeData))
    .then(readmeData => generateMarkdown(readmeData))
    .then(readmeMarkdown => console.log(readmeMarkdown))
}

// Function call to initialize app
init()








