//node modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//variable to connect modules with application
const generateReadMe = require("./generateReadMe");
const licenseBadges = require("./licenseBadges");
const writeFileAsync = util.promisify(fs.writeFile);

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
			message: "What command should be run to install dependancies?",
		},
		{
			type: "input",
			name: "usage",
			message: "Provide instructions and examples for use.",
		},
		{
			type: "input",
			name: "contributing",
			message: "What does the user need to know about contributing to the project?",
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
			message: "What command should be used to run tests?",
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
		const data = await promptUser();
		data.licenseBadges = licenseBadges(data.license);
		let readMeData = generateReadMe(data);
		await writeFileAsync("README-.md", readMeData);
		console.log("✔️  Successfully wrote to README.md");
	} catch (err) {
		throw err;
	}
}

init();
