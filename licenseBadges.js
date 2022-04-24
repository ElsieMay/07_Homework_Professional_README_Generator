const licenseBadges = (value) => {
	if (value === "GNU AGPLv3") {
		return "[![License: AGPL v3](https://img.shields.io/badge/license-GNU%20AGPLv3-green)](https://www.gnu.org/licenses/agpl-3.0)";
	} else if (value === "GNU GPLv3") {
		return "[![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-green)](https://www.gnu.org/licenses/gpl-3.0)";
	} else if (value === "GNU LGPLv3") {
		return "[![License: GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)](https://www.gnu.org/licenses/lgpl-3.0)";
	} else if (value === "Mozilla") {
		return "[![License: Mozilla](https://img.shields.io/badge/license-Mozilla-yellow)](https://opensource.org/licenses/MPL-2.0)";
	} else if (value === "MIT") {
		return "[![License: MIT](https://img.shields.io/badge/license-MIT-red)](https://opensource.org/licenses/MIT)";
	} else if (value === "Apache") {
		return "[![License: Apache](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)";
	} else if (value === "Boost") {
		return "[![License: Boost](https://img.shields.io/badge/license-Boost-orange)](https://www.boost.org/users/license.html)";
	}
};
