const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'block-developers-cookbook',
		description: 'A tutorial on how to lock post saving based on the word count.',
		editorScript: 'file:./word-counter.js',
		npmDependencies: ['@wordpress/icons'],
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
	},
	variants: {
		start: {},
		completed: {
			customScripts: {
				build: 'wp-scripts build ./src/word-counter.js',
				start: 'wp-scripts start ./src/word-counter.js',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/src' ),
};
