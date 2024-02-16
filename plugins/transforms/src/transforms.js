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
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( { message }, innerBlocks ) => {
				const newInnerBlocks = [
					...innerBlocks,
					createBlock( 'core/paragraph', {
						align: 'center',
						content: message,
						fontSize: 'large',
						placeholder: 'Write title…',
					} ),
				];

				return createBlock(
					'core/cover',
					{
						customOverlayColor: '#be0b24',
					},
					newInnerBlocks
				);
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
		{
			type: 'block',
			blocks: [ 'core/cover' ],
			transform: ( attributes, innerBlocks ) => {
				const [ firstBlock ] = innerBlocks;
				const { content } =
					firstBlock.attributes || 'More that meets the eye!';
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
