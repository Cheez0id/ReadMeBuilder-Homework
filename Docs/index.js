// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "description",
		message: "Please write a short description of your project",
	},
	{
		type: "input",
		name: "description",
		message: "Please write about contents",
	},
	{
		type: "input",
		name: "usage",
		message: "Please explain how this may be used",
	},
	{
		type: "input",
		name: "contributing",
		message: "Please explain how to contribute",
	},
	{
		type: "input",
		name: "installation",
		message: "Please explain what is needed to be installed",
	},
	{
		type: "input",
		name: "tests",
		message: "How to run tests",
	},
	{
		type: "input",
		name: "questions",
		message: "How to submit questions",
	},
	{
		type: "list",
		name: "license",
		message: "What kind of license should your project have?",
		choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
	},
];

// TODO: Create a function to write README file
function writeToFile(data) {
	fs.writeFile("README.md", data, (err) =>
		err ? console.error(err) : console.log("Success!")
	);
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		writeToFile(generateMarkdown({ ...data }));
	});
}

// Function call to initialize app
init();
