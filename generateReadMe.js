const generateReadMe = (data) =>
	`
<h1 align="center">${data.title}</h1>

## Description
${data.description}

${data.licenseBadges}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To install necessary dependancies, run the following command:<br>
<mark>${data.installation}</mark>

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
This application is licensed under the ${data.license} license.

## Tests
To run tests, please use the following command:<br>
<mark>${data.tests}</mark>

## Questions
Issues can be reported through my github or email address below.<br>
***GitHub Username: ${data.userName} <https://github.com/${data.userName}>.***<br>
***Please feel free to reach out to me with any questions. My email address is: ${data.email}.***
`;
module.exports = generateReadMe;
