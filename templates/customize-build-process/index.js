const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'customize-build-process',
		folderName: 'blocks/custom-block',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		npmDevDependencies: [ 'webpack-remove-empty-scripts' ],
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build --webpack-src-dir=blocks',
				format: 'wp-scripts format',
				'lint:css': 'wp-scripts lint-style',
				'lint:js': 'wp-scripts lint-js',
				'packages-update': 'wp-scripts packages-update',
				'plugin-zip': 'wp-scripts plugin-zip',
				start: 'wp-scripts start --webpack-src-dir=blocks',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
