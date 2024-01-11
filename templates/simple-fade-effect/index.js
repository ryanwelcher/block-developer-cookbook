const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'simple-fade-effect',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
