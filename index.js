// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Array of questions for user input with validate function
const questions = [
    // project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => input.length > 0 ? true : 'Title cannot be empty.'
    },
    
    // project description:
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?',
        validate: input => input.length > 0 ? true : 'Description cannot be empty.'
    },
    
    // steps for installing the project
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Is there a web address to view this project?',
        validate: input => input.length > 0 ? true : 'Installation steps cannot be empty. You may type none or N/A if not applicable'
    },

    // how to use the project steps
    {
        type: 'input',
        name: 'usage',
        message: 'What are the steps for using the project?',
        validate: input => input.length > 0 ? true : 'Usage steps cannot be empty. You may type none or N/A if not applicable'
    },

    // license
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None']
    },

    // license not specified in previous question
    {
        type: 'input',
        name: 'customLicense',
        message: 'Please enter the license your project uses.',
        when: (answers) => answers.license === 'Other',
        validate: input => input.length > 0 ? true : 'Custom license cannot be empty. You may type none or N/A if not applicable'
    },

    // contributors and resources cited
    {
        type: 'input',
        name: 'contribution',
        message: 'List your collaborators or any sources that helped you create this project.',
        validate: input => input.length > 0 ? true : 'Contributors/source list cannot be empty. You may type none or N/A if not applicable'
    },

    // Tests Required
    {
        type: 'list',
        name: 'testsRequired',
        message: 'Is there a test needed for this project?',
        choices: ['Yes', 'No']
    },

    // If they answer Yes to the previous, here is where they can display those steps.
    {
        type: 'input',
        name: 'testingSteps',
        message: 'Please specify the testing steps:',
        when: (answers) => answers.testsRequired === 'Yes',
        validate: input => input.length > 0 ? true : 'Tests required cannot be empty. You may type none or N/A if not applicable'
    },

    // github username
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
        validate: input => input.length > 0 ? true : 'Username cannot be empty. You may type none or N/A if not applicable'
    },

    // email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: input => input.length > 0 ? true : 'Email cannot be empty. You may type none or N/A if not applicable'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    // Use fs to write data to fileName
    fs.writeFile('./generated/README.md', data, err => {
        if (err) throw err;
        console.log('README.md generated!');
    });
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
