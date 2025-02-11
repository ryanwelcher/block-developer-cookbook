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
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build ./src/block-binding-shortcut.js',
				start: 'wp-scripts start ./src/block-binding-shortcut.js',
			},
		},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
