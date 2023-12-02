/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal Dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const [ canInsert, setCanInsert ] = useState( true );
	const { featuredImage, originalImage, blocks, mediaInfo } = useSelect(
		( select ) => {
			const featuredImageId =
				select( editorStore ).getEditedPostAttribute(
					'featured_media'
				);
			return {
				featuredImage: featuredImageId,
				originalImage:
					select( editorStore ).getCurrentPostAttribute(
						'featured_media'
					),
				blocks: select( blockEditorStore ).getBlocks(),
				mediaInfo: select( 'core' ).getMedia( featuredImageId ),
			};
		},
		[]
	);

	const { insertBlock } = useDispatch( blockEditorStore );

	if ( mediaInfo ) {
		console.log( 'featuredImage:', featuredImage, mediaInfo );
		console.log( 'Original Image:', originalImage );
	} else {
		console.log( 'No mediaInfo' );
		console.log( 'Original Image:', originalImage );
	}

	// useEffect( () => {
	// 	if ( blocks.length % 10 ) {
	// 		const newBlock = createBlock( 'core/paragraph', {
	// 			content: '========',
	// 		} );
	// 		insertBlock( newBlock );
	// 	}
	// }, [ blocks, insertBlock, canInsert ] );

	return (
		<p { ...useBlockProps() }>
			{ __(
				'Using The Data Layer – hello from the editor!',
				'using-the-data-layer'
			) }
		</p>
	);
}
