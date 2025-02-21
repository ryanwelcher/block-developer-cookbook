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
		customScripts: {
			build: 'wp-scripts build ./src/block-binding-shortcut.js',
			start: 'wp-scripts start ./src/block-binding-shortcut.js',
		},
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
