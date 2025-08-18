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
		pluginDescription: "Registers some custom commands for the Command Palette",
		example: {},
		npmDependencies: ["@wordpress/icons"],
		customScripts: {
			build: "wp-scripts build",
			start: "wp-scripts start",
		},
	},
	variants: {
		start: {},
		completed: {
			blockTemplatesPath: join(__dirname, "templates/src/completed"),
		},
	},
	pluginTemplatesPath: join(__dirname, "templates/plugin"),
	blockTemplatesPath: join(__dirname, "templates/src/starter"),
};
