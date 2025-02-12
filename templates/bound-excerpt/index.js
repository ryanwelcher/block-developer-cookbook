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
		npmDependencies: ['@wordpress/icons'],
		customScripts: {
			build: 'wp-scripts build ./src/bound-excerpt.js',
			start: 'wp-scripts start ./src/bound-excerpt.js',
		},
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
