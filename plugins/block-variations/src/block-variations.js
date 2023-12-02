/**
 * WordPress dependencies
 */
import { registerBlockVariation } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */

registerBlockVariation( 'core/quote', {
	name: 'blue',
	title: __( 'Blue Quote' ),
	// isDefault: true,
	attributes: {
		color: 'blue',
		className: 'is-style-blue-quote',
	},
	icon: 'format-quote',
	isActive: ( blockAttributes, variationAttributes ) =>
		blockAttributes.color === variationAttributes.color,
} );

registerBlockVariation( 'core/paragraph', {
	name: 'prefilled-content',
	title: __( 'Paragraph with some text' ),
	attributes: {
		placeholder: 'Custom placeholder text',
	},
	icon: 'smiley',
	isActive: ( blockAttributes, variationAttributes ) => {
		return blockAttributes.placeholder === variationAttributes.placeholder;
	},
} );

registerBlockVariation( 'core/embed', {
	name: 'power-bi',
	title: __( 'PowerBI' ),
	attributes: { providerNameSlug: 'PowerBI' },
} );

const MY_VARIATION_NAME = 'books-list';
registerBlockVariation( 'core/query', {
	name: MY_VARIATION_NAME,
	title: 'Books List',
	attributes: {
		namespace: MY_VARIATION_NAME,
		query: {
			perPage: 2,
			// pages: 0,
			// offset: 0,
			postType: 'pages',
			// order: 'desc',
			// orderBy: 'date',
			// author: '',
			// search: '',
			// exclude: [],
			// sticky: '',
			// inherit: false,
		},
	},
	scope: [ 'inserter' ],
	isActive: [ 'namespace' ],
	innerBlocks: [
		[
			'core/post-template',
			{},
			[ [ 'core/post-title' ], [ 'core/post-excerpt' ] ],
		],
		[ 'core/query-pagination' ],
		[ 'core/query-no-results' ],
	],
} );
