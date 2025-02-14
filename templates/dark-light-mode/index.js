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
		viewScriptModule: 'file:./view.js',
		render: 'file:./render.php',
		supports: {
			interactive: true,
		},
		icon: 'star-half',
		editorStyle: false,
		customScripts: {
			build: 'wp-scripts build --experimental-modules',
			start: 'wp-scripts start --experimental-modules',
		},
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
