/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockVariation } from '@wordpress/blocks';
import { postExcerpt as icon } from '@wordpress/icons';

/**
 * Register a block variation to make it easier to assign the custom binding.
 */
registerBlockVariation( 'core/paragraph', {
	name: 'block-developer-cookbook/excerpt',
	title: __( 'Bound Excerpt', 'block-developer-cookbook' ),
	icon,
	description: __(
		'Mange the post excerpt directly in a block using a custom binding.',
		'block-developer-cookbook'
	),
	isActive: [ 'metadata.bindings.content.source' ],
	attributes: {
		metadata: {
			bindings: {
				content: { source: 'block-developer-cookbook/excerpt' },
			},
		},
	},
	scope: [ 'inserter' ],
} );
