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
			"Registers custom icons and services for the Social Icons block.",
		textDomain: "custom-social-icons",
		customScripts: {
			build: "wp-scripts build",
			start: "wp-scripts start",
		},
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join(__dirname, "files/plugin"),
	blockTemplatesPath: join(__dirname, "files/src"),
};
