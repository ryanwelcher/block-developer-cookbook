const { join } = require('path');
const { version, description } = require('./package.json');
module.exports = {
	defaultValues: {
		version,
		description,
		slug: 'transforms',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		attributes: {
			message: {
				type: 'string',
				default: 'More than meets the eye!',
			},
		},
		render: 'file./render.php',
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join(__dirname, 'files/plugin'),
	blockTemplatesPath: join(__dirname, 'files/block'),
};
