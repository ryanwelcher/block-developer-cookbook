const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'block-developers-cookbook',
		category: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		static: {},
	},
	pluginTemplatesPath: join( __dirname, 'templates/plugin' ),
	blockTemplatesPath: join( __dirname, 'templates/block' ),
};
