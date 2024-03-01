const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		dashicon: 'format-quote',
		category: 'text',
		attributes: {},
		example: {},
		supports: {},
		render: 'file:./render.php',
	},
	variants: {
		start: {},
		completed: {
			attributes: {
				authorName: { type: 'string' },
			},
			supports: {
				multiple: false,
			},
			example: {
				attributes: {
					authorName: 'WordPress',
				},
			},
			customBlockJSON: {
				usesContext: [ 'postId', 'postType' ],
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
