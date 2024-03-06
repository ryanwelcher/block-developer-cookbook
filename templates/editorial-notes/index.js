const { join } = require( 'path' );
const { version } = require( './package.json' );

module.exports = {
	defaultValues: {
		version,
		namespace: 'block-developers-cookbook',
		editorScript: 'file:./notes-field.js',
	},
	variants: {
		start: {},
		completed: {
			completed: {
				customScripts: {
					build: 'wp-scripts build ./src/notes-field.js',
					start: 'wp-scripts start ./src/notes-field.js',
				},
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/src' ),
};
