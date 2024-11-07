/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockBindingsSource } from '@wordpress/blocks';

/**
 * Register the custom bindings so it can be edited in the block editor.
 */
registerBlockBindingsSource( {
	label: __( 'Excerpt' ),
	name: 'block-developer-cookbook/excerpt',
	getValues( { select } ) {
		return {
			content:
				select( 'core/editor' ).getEditedPostAttribute( 'excerpt' ),
		};
	},

	setValues( { dispatch, bindings } ) {
		dispatch( 'core/editor' ).editPost( {
			excerpt: bindings?.content?.newValue,
		} );
	},

	canUserEditValue( { select, context } ) {
		return true;
	},
} );
