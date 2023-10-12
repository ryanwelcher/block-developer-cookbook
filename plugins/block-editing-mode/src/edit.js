/**
 * WordPress Dependencies
 */
import {
	useBlockProps,
	useBlockEditingMode,
	RichText,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import './editor.scss';

export default function Edit( {
	attributes: { message },
	setAttributes,
	clientId,
} ) {
	// Possible values: 'disabled', 'contentOnly', and 'default'
	const { blocks, getBlockIndex, getBlockParents } = useSelect(
		( select ) => {
			return {
				blocks: select( blockEditorStore ).getBlocks(),
				getBlockIndex: select( blockEditorStore ).getBlockIndex,
				getBlockOrder: select( blockEditorStore ).getBlockOrder,
				getBlockParents: select( blockEditorStore ).getBlockParents,
			};
		},
		[]
	);
	let mode = 'default';
	if ( getBlockParents( clientId ).length ) {
		mode = 'contentOnly';
	} else {
		const index = getBlockIndex( clientId );
		if ( index > 0 ) {
			if ( blocks[ index - 1 ].name === 'core/paragraph' ) {
				mode = 'disabled';
			}
		}
	}

	useBlockEditingMode( mode );
	return (
		<RichText
			{ ...useBlockProps() }
			tagName="p"
			value={ message }
			onChange={ ( newMessage ) =>
				setAttributes( { message: newMessage } )
			}
		/>
	);
}
