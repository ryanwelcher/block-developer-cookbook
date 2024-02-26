const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'gallery-slider',
		namespace: 'block-developers-cookbook',
		description: 'A gallery slider built using the Interactivity API',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		category: 'media',
		attributes: {},
		example: {},
		supports: {},
		customBlockJSON: {
			icon: 'media-interactive',
		},
		render: 'file:./render.php',
	},
	variants: {
		start: {},
		completed: {
			attributes: {
				continuous: {
					type: 'boolean',
				},
			},
			supports: {
				interactivity: true,
				align: true,
				alignWide: true,
			},
			example: {},
			customBlockJSON: {
				viewScriptModule: 'file:./view.js',
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
