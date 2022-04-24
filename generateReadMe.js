const generateReadMe = ({ data }) =>
	`<h1 align="center">${data.title}</h1>

    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [License](#license)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributing
    ${data.contributing}

    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
    This application is protected by ${data.license} license.
`;
