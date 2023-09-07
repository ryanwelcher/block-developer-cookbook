/**
 * WordPress dependencies
 */
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import {
	BlockControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

// Only allow this format on these blocks
const allowList = [ 'core/paragraph', 'core/heading' ];

const CitationFormatToolbarButton = ( { isActive, onChange, value } ) => {
	const selectedBlock = useSelect(
		( select ) => select( blockEditorStore ).getSelectedBlock(),
		[]
	);

	if ( selectedBlock && ! allowList.includes( selectedBlock.name ) ) {
		return null;
	}

	return (
		<RichTextToolbarButton
			icon="editor-code"
			title={ __( 'Citation!!', 'managing-formats' ) }
			onClick={ () => {
				onChange(
					toggleFormat( value, {
						type: 'block-developers-cookbook/managing-formats',
					} )
				);
			} }
			isActive={ isActive }
		/>
	);

	// return (
	// 	<BlockControls>
	// 		<ToolbarGroup>
	// 			<ToolbarButton
	// 				icon="editor-code"
	// 				title={ __( 'Citation!!', 'managing-formats' ) }
	// 				onClick={ () => {
	// 					onChange(
	// 						toggleFormat( value, {
	// 							type: 'block-developers-cookbook/managing-formats',
	// 						} )
	// 					);
	// 				} }
	// 				isActive={ isActive }
	// 			/>
	// 		</ToolbarGroup>
	// 	</BlockControls>
	// );
};

registerFormatType( 'block-developers-cookbook/managing-formats', {
	title: __( 'Citation! More than meets the reference!', 'managing-formats' ),
	tagName: 'cite',
	className: 'custom-format-cite',
	edit: CitationFormatToolbarButton,
} );
