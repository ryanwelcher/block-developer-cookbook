const { join } = require( 'path' );
const { version } = require( './package.json' );

module.exports = {
	defaultValues: {
		version,
		folderName: 'blocks/custom-block',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		npmDevDependencies: [ 'webpack-remove-empty-scripts' ],
		render: 'file:./render.php',
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build --webpack-src-dir=blocks',
				start: 'wp-scripts start --webpack-src-dir=blocks',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
