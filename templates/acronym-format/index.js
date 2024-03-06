const { join } = require( 'path' );
const { version } = require( './package.json' );

module.exports = {
	defaultValues: {
		version,
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		example: {},
		editorScript: 'file:./acronym.js',
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build ./src/acronym.js',
				start: 'wp-scripts start ./src/acronym.js',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/src' ),
};
