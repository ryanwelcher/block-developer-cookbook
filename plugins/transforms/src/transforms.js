/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';

const transformers = {
	to: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { message } ) => {
				return createBlock( 'core/paragraph', {
					content: message,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { message } ) => {
				return createBlock( 'core/heading', {
					content: message,
				} );
			},
		},
	],
	from: [
		{
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: ( { content } ) => {
				return createBlock( 'block-developers-cookbook/transforms', {
					message: content,
				} );
			},
		},
		{
			type: 'block',
			blocks: [ 'core/heading' ],
			transform: ( { content } ) => {
				return createBlock( 'block-developers-cookbook/transforms', {
					message: content,
				} );
			},
		},
		// Typing and hitting enter to insert a new block.
		{
			type: 'enter',
			regExp: /^rollout!$/,
			transform: () => {
				return createBlock( 'block-developers-cookbook/transforms' );
			},
		},
		// Single character prefix.
		{
			type: 'prefix',
			prefix: '?',
			transform: () => {
				return createBlock( 'block-developers-cookbook/transforms' );
			},
		},
	],
};
export default transformers;
