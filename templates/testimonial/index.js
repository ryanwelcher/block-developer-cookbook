const { join } = require( 'path' );

module.exports = {
	defaultValues: {
		slug: 'testimonial',
		namespace: 'block-developers-cookbook',
		customPackageJSON: {
			prettier: '@wordpress/prettier-config',
		},
		category: 'text',
		attributes: {
			authorName: {
				type: 'string',
			},
		},
		example: {
			attributes: {
				authorName: 'WordPress',
			},
		},
		supports: {
			html: false,
			multiple: false,
		},
		customBlockJSON: {
			icon: 'format-quote',
			usesContext: [ 'postId', 'postType' ],
		},
		render: 'file:./render.php',
	},
	variants: {
		start: {},
		completed: {},
	},
	pluginTemplatesPath: join( __dirname, 'files/plugin' ),
	blockTemplatesPath: join( __dirname, 'files/block' ),
};
