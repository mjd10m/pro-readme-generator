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
        message: 'What is your collaborators name? (Required)',
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
        name: 'collabGithub',
        message: 'Enter your collaborators GitHub Username',
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
        name: 'confirmAddCollab',
        message: 'Would you like to add additional collaborators?',
        default: false
    }
];
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
    .then(readmeData => console.log(readmeData))
}

// Function call to initialize app
init()

