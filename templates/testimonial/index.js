const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'testimonial',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		category: 'text',
		attributes: {},
		example: {},
		supports: {},
		customBlockJSON: {
			icon: 'format-quote',
		},
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
				icon: 'format-quote',
				usesContext: [ 'postId', 'postType' ],
			},
		},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
