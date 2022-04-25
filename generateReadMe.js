const generateReadMe = (data) =>
	`<h1 align="center">${data.title}</h1>

    ## Description
   ${data.description}

   ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

   --

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
    - [Contributions](#contributions)

    --

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
    This application is protected by ${data.license} license.

    ## Tests
    ${data.tests}

    ## Questions
    *GitHub Username: [${data.userName}](https://github.com/${data.userName})
    *Please feel free to reach out to me with any questions. My email address is: ${data.email}
`;
module.exports = generateReadMe;
