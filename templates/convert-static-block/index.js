const { join } = require("path");
const { version, description } = require("./package.json");

module.exports = {
	defaultValues: {
		version,
		description,
		namespace: "block-developers-cookbook",
		customPackageJSON: {
			prettier: "@wordpress/prettier-config",
		},
		pluginDescription:
			"A tutorial on how to convert a static block into a dynamic one",
		example: {},
		customScripts: {
			build: "wp-scripts build",
			start: "wp-scripts start",
		},
		attributes: {
			name: {
				type: "string",
				default: "Classic Chocolate Chip Cookies",
			},
		},
	},
	variants: {
		start: {},
		completed: {
			render: "file:./render.php",
			blockTemplatesPath: join(__dirname, "templates/src/completed"),
		},
	},
	pluginTemplatesPath: join(__dirname, "templates/plugin"),
	blockTemplatesPath: join(__dirname, "templates/src/starter"),
};
