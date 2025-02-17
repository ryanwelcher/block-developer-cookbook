const { join } = require('path');
const { version, description } = require('./package.json');

module.exports = {
	defaultValues: {
		version,
		description,
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		editorScript: 'file:./your-people.js',
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build ./src/your-people.js',
				start: 'wp-scripts start ./src/your-people.js',
			},
		},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
