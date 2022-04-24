//node modules
const inquirer = require("inquirer");
const fs = require("fs");
//variable to connect modules with application
const generateReadMe = require("./generateReadMe");
const licenseBadges = require("./licenseBadges");

// Uses inquirer to generate questions
const promptUser = () => {
	return inquirer.prompt([
		{
			type: "input",
			name: "title",
			message: "Please enter your project title.",
		},
		{
			type: "input",
			name: "description",
			message: "Provide a short description explaining the what, why, and how of your project.",
		},
		{
			type: "input",
			name: "installation",
			message: "What are the steps required to install your project?",
		},
		{
			type: "input",
			name: "usage",
			message: "Provide instructions and examples for use.",
		},
		{
			type: "input",
			name: "contributing",
			message: "Who are the contributors of this projects?",
		},
		{
			type: "list",
			name: "license",
			message: "Choose license type used for this project from the list provided.",
			choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla", "MIT", "Apache", "Boost"],
		},
		{
			type: "input",
			name: "tests",
			message: "Please list any testing protocols you used in this project.",
		},
		{
			type: "input",
			name: "userName",
			message: "What is your GitHub username?",
		},
		{
			type: "input",
			name: "email",
			message: "What is your email address?",
		},
	]);
};
// function to initialize program and create README file
async function init() {
	try {
		const answers = await promptUser();
		data.licenseBadges = licenseBadges(data.license);
		let readMeData = generateReadMe(data);
		await writeFileAsync("created-README.md", readMeData);
		console.log("✔️  Successfully wrote to README.md");
	} catch (err) {
		throw err;
	}
}

init();
