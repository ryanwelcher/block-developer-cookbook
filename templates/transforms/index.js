const { join } = require( 'path' );

module.exports = {
	defaultValues: {
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
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
