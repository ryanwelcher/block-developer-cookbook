const { join } = require( 'path' );
const { version, description } = require( './package.json' );

module.exports = {
	defaultValues: {
		version,
		namespace: 'block-developers-cookbook',
		description,
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		npmDependencies: ['@wordpress/icons']
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/src' ),
};
