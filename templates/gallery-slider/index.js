const { join } = require( 'path' );
const { version } = require( './package.json' );
module.exports = {
	defaultValues: {
		version,
		namespace: 'block-developers-cookbook',
		description: 'A gallery slider built using the Interactivity API',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		category: 'media',
		attributes: {
			continuous: {
				type: 'boolean',
			},
		},
		example: {},
		customBlockJSON: {
			icon: 'media-interactive',
		},
		render: 'file:./render.php',
		viewScript: null,
	},
	variants: {
		start: {},
		completed: {
			supports: {
				interactivity: true,
				align: true,
				alignWide: true,
			},
			viewScriptModule: 'file:./view.js',
			customScripts: {
				build: 'wp-scripts build --experimental-modules',
				start: 'wp-scripts start --experimental-modules',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
