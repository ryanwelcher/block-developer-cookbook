const { join } = require('path');
const { version, description } = require('./package.json');

module.exports = {
	defaultValues: {
		version,
		description,
		namespace: 'block-developer-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		customBlockJSON: {
			icon: 'buddicons-community',
		},
	},
	variants: {
		start: {},
		completed: {
			attributes: {
				name: {
					type: 'string',
					default: 'Classic Chocolate Chip Cookies',
				},
			},
		},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/src'),
};
